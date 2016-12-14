import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    //keep state
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    };
  }

  sendCredentials() {
    axios.post('/users', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password
    });
  }

  checkFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  checkLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  checkUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  checkPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    console.log('SignUp');
    return (
      <div className="container main-signup-container">
        <div className="col-md-6 col-md-offset-3">
          <h1>Sign Up for CrashCourse</h1>
          <form className="form-signup signup">
           <div className="form-group row">
              <label htmlFor="firstname" className="col-xs-4 col-form-label">First Name</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="firstname" onChange={this.checkFirstname.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lastname" className="col-xs-4 col-form-label">Last Name</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="lastname" onChange={this.checkLastname.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-xs-4 col-form-label">Email</label>
              <div className="col-xs-8">
                <input type="email" className="form-control" id="email" onChange={this.checkUsername.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-xs-4 col-form-label">Password</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="password" onChange={this.checkPassword.bind(this)}></input>
              </div>
            </div>
            <button className="btn btn-sm btn-primary" type="submit" onClick={this.sendCredentials.bind(this)}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
