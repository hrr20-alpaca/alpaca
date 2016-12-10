import React from "react";
//instead of writing <a href="">, you can substitute it with Link
// import { Link } from "react-router";

export default class Login extends React.Component {
  render() {
    console.log("Login");
    return (
      <div class="container">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          
        </form>
      </div> 
    );
  }
}