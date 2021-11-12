import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents">
         <h3>Select The Number Of Events</h3>
         <RangeSlider
           min={1}
           max={12}
          className="num-events"
          value={this.props.numberOfEvents}
          //onChange={(e) => this.props.updateEventCount(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;