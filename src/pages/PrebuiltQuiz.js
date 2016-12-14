import React from "react";
import axios from "axios";
import { VelocityComponent, VelocityTransitionGroup, velocityHelpers } from 'velocity-react';

export default class PrebuiltQuiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userID: '',
      category: '',
      name: '',
      correct: '',
      wrong1: '',
      wrong2: '',
      wrong3: '',
      questions: [],
      answers: [],
      index: null,
      timeCount:15,
      correctAns: 0, // number of correct and wrong answer submissions
      wrongAns: 0,
      startTimer: true,
      quizName: '',
      quizNames: [],
      score: 0,
      completedQuiz: false,
      showTimer: false,
    };
  }

  componentDidMount(){
    this.getQuizes(); // generate drop down list to select test
    this.GetQuestions();
  }

  getQuizes() {
    axios.get('/questions')
      .then(response => {
        var entries = response.data;
        var temp = [];
        entries.forEach(entry => {
          if (temp.indexOf(entry.testName) === -1) {
            temp.push(entry.testName);
          }
        });
        this.setState({
          quizNames: temp,
        });
      })
      .catch(function(err){
        console.log(err)
      })
  }

  componentDidUpdate() {
    if (this.state.startTimer) {
      this.handleTimeCount();
      this.setState({startTimer: false});
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  playCorrectSound() {
    var audio = new Audio('./assets/correct.mp3');
    audio.play();
  }

  playWrongSound() {
    var audio = new Audio('./assets/wrongCrash.wav');
    audio.play();
  }

  GetQuestions() {
    var config = {
      params: {
        ID: this.state.quizName
      }
    };
    var questions;
    var index = this.state.index;
    axios.get('/questions', config)
      .then(response =>{
        questions = response.data;
        this.setState({
          questions: this.state.questions.concat(questions),
        }, this.handleQuestionChange);
      })
      .catch(function(err){
        console.log(err)
      })
  }

  handleClick(e) {
    if (this.state.correct === e.target.textContent) {
      this.handleCorrect();
    } else {
      this.handleWrong();
    }
  }

  handleCorrect() {
    this.playCorrectSound();
    this.setState({
      timeCount: 15,
      index: this.state.index + 1,
      answers: [],
      correctAns: this.state.correctAns + 1,
    }, this.handleQuestionChange)
  }
  handleWrong() {
    this.playWrongSound();
    this.setState({
      timeCount: 15,
      index: this.state.index + 1,
      answers: [],
      wrongAns: this.state.wrongAns + 1,
    }, this.handleQuestionChange)
  }
  handleTime() {
    this.setState({
      timeCount: this.state.timeCount-1,
    }, function() {
      if (this.state.timeCount === 0) {
        this.handleWrong();
      }
      clearInterval(this.timer);
      this.setState({startTimer: true});
    })
  }
  handleTimeCount() {
    var that = this;
    this.timer = setInterval(function() {
      that.handleTime();
    }, 1000);
  }
  handleQuestionChange() {
    var questions = this.state.questions;
    var index = this.state.index;
    if (index === this.state.questions.length) {
      this.handleEndQuiz();
    } else {
      this.setState({
        name: questions[index].name,
        correct: questions[index].correct,
        wrong1: questions[index].wrong1,
        wrong2: questions[index].wrong2,
        wrong3: questions[index].wrong3,
        answers: this.state.answers.concat(questions[index].correct, questions[index].wrong1, questions[index].wrong2, questions[index].wrong3)
      });
    }
  }
  handleEndQuiz() {
    var percent = (this.state.correctAns/(this.state.questions.length)).toFixed(2) * 100;
    clearInterval(this.timer);
    this.setState({
      score: percent,
      completedQuiz: true,
    })
  }

  handleQuizSelect(e) {
    this.setState({
      quizName: e.target.value,
      questions: [],
      answers: [],
      index: 0,
      timeCount:15,
      correctAns: 0,
      wrongAns: 0,
      showTimer: true,
    }, this.GetQuestions);

  }

          // ternary is used in render to render the completed page if this.state.CompletedQuiz is true :)
          // ternary is also used to display the Timer only after a test has been selected
  render() {

    return (
      <div className="App">
      {
          this.state.completedQuiz ? <h1>quiz complete, your score is: {this.state.score}%!</h1> :
          <div>
            <h1>Select a quiz!</h1>
            <select className="buttonStyle" onChange={this.handleQuizSelect.bind(this)} value={this.state.value} >
              <option selected></option>
              {this.state.quizNames.map(name =>
                <option value={name}>{name}</option>
              )}
            </select>

            <h1>{this.state.name}</h1>
            <VelocityTransitionGroup
              enter={{animation: "transition.slideDownBigOut", duration: 20000, opacity: [1,1], translateY: 200}}
              leave={{opacity: [1,1]}}
            >
              {this.state.answers.map(option => <button onClick={this.handleClick.bind(this)} className={`answer btn btn-lg ${option}`}>{option}</button> )}
            </VelocityTransitionGroup>

            <div className="container"></div>
            {
              this.state.showTimer ? <h2>{this.state.timeCount}</h2> : null
            }
            <div id='ground'></div>
          </div>
      }
      </div>
    );
  }
}
