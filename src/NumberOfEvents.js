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
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: "",
        errorText: "Please enter a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
    this.props.updateEventCount(event.target.value);
  };

  render() {
    return (
      <div className="num-events-container">
        <ErrorAlert text={this.state.errorText} />
        <div className="numberOfEvents">
          <p className="events-text">Number of events:</p>
          <Form.Control
            type="number"
            name="number"
            className="num-events"
            value={this.props.numberOfEvents}
            onChange={(e) => this.handleInputChanged(e)}
            placeholder="12"
          />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
