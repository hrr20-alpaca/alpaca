import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Homepage extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      quizNames: []
    };
  }




  render() {
    console.log('homepage');
    return (
      <div className="container homepage">
        <div className="row text-center hero-section">
          <h1>CrashCourse</h1>
          <i className="fa fa-desktop"></i>
        </div>
        <div className="row main-content">
          <div className="col-md-4 text-left">
              <h2>What is CrashCourse?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
          </div>
          <div className="col-md-4 text-left">
              <h2>Why use CrashCourse?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
          </div>
          <div className="col-md-4 text-left">
              <h2>Get started</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
              <Link to="/signup">Learn More</Link>
          </div>
        </div>




      </div>
    );
  }
}
