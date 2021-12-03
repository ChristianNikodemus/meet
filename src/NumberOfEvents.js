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
    if (value === "") {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    } else if (value >= 1 && value <= 32) {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
      this.props.updateEventCount(value);
    } else {
      this.setState({
        numberOfEvents: this.state.numberOfEvents,
        errorText: "Please enter a number between 1 and 32",
      });
    }
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
            value={this.state.numberOfEvents}
            onChange={(e) => this.handleInputChanged(e)}
            // placeholder="#"
          />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
