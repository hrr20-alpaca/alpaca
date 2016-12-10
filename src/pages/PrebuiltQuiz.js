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
      wrong3: ''
    };
  }

  componentDidMount(){
    axios.get('/questions')
      .then(response =>{
        // new var - get response.data arr
        // iterate through for each question
          // get index 1 to end
            // shuffle the values and then map to
          // onclick would get the value of the clicked button
            // compare that value to this.state.correct

        this.setState({
          name: response.data[0].name,
          correct: response.data[0].correct,
          wrong1: response.data[0].wrong1,
          wrong2: response.data[0].wrong2,
          wrong3: response.data[0].wrong3
        }, function(){
          console.log(this.state.correct)
        })
      })
      .catch(function(err){
        console.log(err)
      })
  }

  render() {
    // console.log("PrebuiltQuiz");

    return (

       <div className="App">
        <h1>PrebuiltQuiz Page</h1>
        <div className="container">
          <div className="buttons">
            <button className="answer">{this.state.correct}</button><br />
            <button className="answer">{this.state.wrong1}</button>
          </div>
        </div>
      </div>
    );
  }
}
