import React, { Component } from 'react';
import './App.css'; //use css file

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log("this.props", this.props)
  }

  //lifecycle hook, runs before component renders
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  //lifecycle hook, runs after component renders completely
  componentDidMount() {
    //continuously updates the current time
    setInterval(() => this.getTimeUntil(this.props.deadline), 1);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    //new Date auto returns current time
    //time is a large number value
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log('time', time);
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    // console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
    //equivalent to above, as long as key and value have the same name
    this.setState({days, hours, minutes, seconds});
  }

  render() {
    // this.getTimeUntil(this.props.deadline);

    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} Hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
