import React from "react";
import axios from "axios";



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
      index: 0,
      timeCount:60,
      correctAns: 0, // number of correct and wrong answer submissions
      wrongAns: 0,
      startTimer: true
    };
  }

  componentDidMount(){
    this.GetQuestions();

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
    var questions;
    var index = this.state.index;
    axios.get('/questions')
      .then(response =>{
        questions = response.data;
        // console.log(questions)
        // new var - get response.data arr
        // iterate through for each question
          // get index 1 to end
            // shuffle the values and then map to
          // onclick would get the value of the clicked button
            // compare that value to this.state.correct

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
    // this.player.play('correct.mp3', function(err) {
    //   console.log('sound error', err);
    //  });
    this.playCorrectSound();
    this.setState({
      timeCount: 60,
      index: this.state.index + 1,
      answers: [],
      correctAns: this.state.correctAns + 1,
    }, this.handleQuestionChange)
  }
  handleWrong() {
    this.playWrongSound();
    this.setState({
      timeCount: 60,
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
    alert('quiz complete, your score is : ' + percent + '%!');
  }

  render() {

    // getting this in with the componentDidMount



    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        {this.state.answers.map(option => <button onClick={this.handleClick.bind(this)} className={`answer btn btn-lg ${option}`}>{option}</button> )}
        <div className="container"></div>
        <h2>{this.state.timeCount}</h2>
      </div>
    );
  }
}
