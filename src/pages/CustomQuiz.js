import React from "react";
import axios from "axios";

export default class CustomQuiz extends React.Component {
 constructor(props) {
    super(props);

    //keep state
    this.state = {
      question: '',
      answer: '',
      option1: '',
      option2: '',
      option3: ''
    };
  }

  //post request via axios
  sendCustomTemplate() {
    axios.post('/questions', {
      name: this.state.question,
      correct: this.state.answer,
      wrong1: this.state.option1,
      wrong2: this.state.option2,
      wrong3: this.state.option3
    })
  }

  handleQuestion(e) {
    this.setState({
      question: e.target.value
    });
  }

  handleCorrentAnswer(e) {
    this.setState({
      answer: e.target.value
    });
  }

  handleWrong1(e) {
    this.setState({
      option1: e.target.value
    });
  }

  handleWrong2(e) {
    this.setState({
      option2: e.target.value
    });
  }

  handleWrong3(e) {
    this.setState({
      option3: e.target.value
    });
  }

  render() {
    console.log("CustomQuiz");
    return (
      <form>
        <div class="input-group">
          <label for="question">Question</label>
          <input type="text" class="form-control" placeholder="Enter a question" onChange={this.handleQuestion.bind(this)}></input>
        </div>
        <div class="input-group">
          <label for="answer">Correct</label>
          <input type="text" class="form-control" placeholder="Enter a answer" onChange={this.handleCorrentAnswer.bind(this)}></input>
        </div>
        <div class="input-group">
          <label for="option1">Wrong 1</label>
          <input type="text" class="form-control" placeholder="Enter a answer" onChange={this.handleWrong1.bind(this)}></input>
        </div>
        <div class="input-group">
          <label for="option2">Wrong 2</label>
          <input type="text" class="form-control" placeholder="Enter a answer" onChange={this.handleWrong2.bind(this)}></input>
        </div>
        <div class="input-group">
          <label for="option3">Wrong 3</label>
          <input type="text" class="form-control" placeholder="Enter a answer" onChange={this.handleWrong3.bind(this)}></input>
        </div>
        <button type="submit" onClick={this.sendCustomTemplate.bind(this)}>Submit</button>
      </form>
    )
  }
}