import React, { Component } from 'react';
import Clock from './Clock';
import './App.css'; //use css file
import { Form, FormControl, Button } from 'react-bootstrap';

//component that gets passed to view
class App extends Component {
  //local state
  constructor (props) {//props refers to inherited data from parent
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  //must not mutate or change state directly
  //call this.changeDeadline using anonymous function
  changeDeadline() {
    //incorrect
    //this.state.deadline = "November 25, 2017";

    //correct
    //this.setState({deadline: "November 25, 2017"})

    //console.log('state', this.state)
    this.setState({deadline: this.state.newDeadline})

  }

  render () {

    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        {/* <div>
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 Hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div> */}
          <Clock
            deadline={this.state.deadline} // passed to Clock component as props
          /> {/* replacement for above */}
        <Form inline> {/*bootstrap */}
          {/* <input */}
          <FormControl
            className='Deadline-input'
            placeholder='new date'
            // onChange={event => console.log('event', event.target.value)}
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
        <Button onClick={() => this.changeDeadline()}>Submit</Button>
      </Form>
      </div>
    )
  }
}

//make available
export default App;
