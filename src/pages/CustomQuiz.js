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
    return (
      <form>
        {/* changed from label to label htmlFor (react version), added input names to make labels work */}
        <div className="input-group">
          <label htmlFor="question">Question</label>
          <input name="question" type="text" className="form-control" placeholder="Enter a question" onChange={this.handleQuestion.bind(this)}></input>
        </div>
        <div className="input-group">
          <label htmlFor="answer">Correct</label>
          <input name="answer" type="text" className="form-control" placeholder="Enter a answer" onChange={this.handleCorrentAnswer.bind(this)}></input>
        </div>
        <div className="input-group">
          <label htmlFor="option1">Wrong 1</label>
          <input name="option1" type="text" className="form-control" placeholder="Enter a answer" onChange={this.handleWrong1.bind(this)}></input>
        </div>
        <div className="input-group">
          <label htmlFor="option2">Wrong 2</label>
          <input name="option2" type="text" className="form-control" placeholder="Enter a answer" onChange={this.handleWrong2.bind(this)}></input>
        </div>
        <div className="input-group">
          <label htmlFor="option3">Wrong 3</label>
          <input name="option3" type="text" className="form-control" placeholder="Enter a answer" onChange={this.handleWrong3.bind(this)}></input>
        </div>
        <button type="submit" onClick={this.sendCustomTemplate.bind(this)}>Submit</button>
      </form>
    )
  }
}
