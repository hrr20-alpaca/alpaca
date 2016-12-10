import React, { Component } from 'react';
import './styles/App.css';

var Nav = ({props}) => (
  <div className="nav">
    <ul className="navList">
      <li><a href="#">Settings</a></li>
      <li><span className="username">USERNAME</span></li>
    </ul>
  </div>
);

var Answer = () => (
  <div className="buttons">
    <button className="answer">answer</button>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>

        <div className="container">
          <Answer /><br />
          <Answer /><br />
          <Answer /><br />
        </div>
      </div>
    );
  }
}

export default App;
