import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 12) {
      this.setState({
        numberOfEvents: "",
        errorText: "Please enter a number between 1 and 12",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <p className="events-text">Number of events:</p>
        <Form.Control
          type="number"
          name="number"
          className="num-events"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateEventCount(e)}
          placeholder="12"
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
