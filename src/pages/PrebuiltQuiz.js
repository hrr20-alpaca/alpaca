import React from "react";
import axios from "axios";

export default class PrebuiltQuiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      correct: '',
      wrong1: '',
      wrong2: '',
      wrong3: '',
      questions: [],
      answers: []
    };
  }

  componentDidMount(){
    this.GetQuestions()
  }

  GetQuestions() {
    var questions;
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
          name: questions[0].name,
          correct: questions[0].correct,
          wrong1: questions[0].wrong1,
          wrong2: questions[0].wrong2,
          wrong3: questions[0].wrong3,
          questions: this.state.questions.concat(questions),
          answers: this.state.answers.concat(questions[0].correct, questions[0].wrong1, questions[0].wrong2, questions[0].wrong3)
        })
      })
      .catch(function(err){
        console.log(err)
      })
  }

  clicked(e) {
    if (this.state.correct === e.target.textContent) {
      alert("Correct");
    } else {
      alert("Wrong");
    }
  }

  render() {
    // getting this in with the componentDidMount
    return (
       <div className="App">
        {this.state.answers.map(option => <button onClick={this.clicked.bind(this)} className={`answer btn btn-lg ${option}`}>{option}</button> )}
        <div className="container"></div>
      </div>
    );
  }
}
