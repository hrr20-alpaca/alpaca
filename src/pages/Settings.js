import React from 'react';

export default class Settings extends React.Component {
  render() {
    console.log('settings');
    return (
      <div>
        <h1>Settings</h1>
        <h5>Difficulty</h5>
        <h5>Theme</h5>
        <h5>Delete Account</h5>
      </div>
    );
  }
}
