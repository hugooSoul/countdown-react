import React, { Component } from 'react';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Countdown Timer</h2>
          <CountdownTimer endDate={moment('03/30/2018')}/>
        </div>
        <div>
          <p>Time set up to:<b> March 30, 2018</b></p>
        </div>
      </div>
    );
  }
}

export default App;
