import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import CustomQuiz from './pages/CustomQuiz';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PrebuiltQuiz from './pages/PrebuiltQuiz';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import Settings from './pages/Settings';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homepage}></IndexRoute>
      <Route path="/settings" name="settings" component={Settings}></Route>
      <Route path="/prebuiltQuiz" name="prebuiltQuiz" component={PrebuiltQuiz}></Route>
      <Route path="/customQuiz" name="customQuiz" component={CustomQuiz}></Route>
      <Route path="/signup" name="signup" component={SignUp}></Route>
      <Route path="/login" name="login" component={Login}></Route>
    </Route>
  </Router>,
app);
