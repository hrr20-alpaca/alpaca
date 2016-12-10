import React from "react";

export default class PrebuiltQuiz extends React.Component {


  render() {
    console.log("PrebuiltQuiz");
    
    return (
      
       <div className="App">
        <h1>PrebuiltQuiz Page</h1>
        <div className="container">
          <div className="buttons">
            <button className="answer">answer</button>
          </div>
        </div>
      </div>
    );
  }
}