import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';


//instead of writing <a href="">, you can substitute it with Link
// import { Link } from "react-router";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    //keep state
    this.state = {
      email: '',
      password: ''
    };
  }

  sendCredentials() {
    axios.post('/users', {
      email: this.state.email,
      password: this.state.password,
    });
  }

  checkUsername(e) {
    this.setState({
      email: e.target.value
    });
  }

  checkPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className="container main-login-container">
        <div className="col-md-4 col-md-offset-4">
          <h1>Log In</h1>
          <form className="form-signin login">
            <div className="form-group row">
              <label htmlFor="username" className="col-xs-4 col-form-label">Email</label>
              <div className="col-xs-8">
                <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.checkUsername.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-xs-4 col-form-label">Password</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="password" placeholder="Password" onChange={this.checkPassword.bind(this)}></input>
              </div>
            </div>
            <button className="btn btn-sm btn-primary" type="submit" onClick={this.sendCredentials.bind(this)}>Log In</button>
          </form>
          <div className="row text-center">
            <small >Don't have an account?<Link to="/signup"> Sign Up</Link></small>
          </div>
        </div>
      </div>
    );
  }
}
