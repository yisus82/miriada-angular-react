import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      decis: 0,
      running: false
    };
  }
  handleStartClick = event => {
    if (!this.state.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100);
      this.setState({ running: true });
    }
  };
  handleStopClick = event => {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
    }
  };
  handleResetClick = event => {
    this.setState({
      minutes: 0,
      seconds: 0,
      decis: 0
    });
  };
  tick = () => {
    let decis = this.state.decis + 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (decis === 10) {
      decis = 0;
      seconds = seconds + 1;
    }

    if (seconds === 60) {
      decis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }

    this.setState({
      minutes,
      seconds,
      decis
    });
  };
  zeroPad = value => (value < 10 ? `0${value}` : value);
  render() {
    return (
      <div className="app">
        <div className="display">
          <div className="state">Status: {this.state.running ? 'Running' : 'Stopped'}</div>
          <div className="numbers">
            <span className="mins">{this.zeroPad(this.state.minutes)}:</span>
            <span className="secs">{this.zeroPad(this.state.seconds)} </span>
            <span className="decis">.{this.state.decis}</span>
          </div>
        </div>

        <div className="actions">
          <button
            className={'btn start' + (this.state.running ? ' disabled' : '')}
            onClick={this.handleStartClick}
          >
            Start
          </button>

          <button
            className={'btn stop' + (!this.state.running ? ' disabled' : '')}
            onClick={this.handleStopClick}
          >
            Stop
          </button>

          <button
            className={
              'btn reset' +
              (this.state.running || this.state.decis || this.state.seconds || this.state.minutes
                ? ''
                : ' disabled')
            }
            onClick={this.handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
