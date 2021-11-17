import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Welcome from "./Welcome.js";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
  state = {
    locations: [],
    events: [],
    numberOfEvents: 12,
    errorText: "",
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEventCount = async (e) => {
    const newVal = e.target.value ? parseInt(e.target.value) : 12;

    if (newVal < 1 || newVal > 12) {
      await this.setState({
        errorText: "Please choose a number between 1 and 12",
      });
    } else {
      await this.setState({
        errorText: "",
        numberOfEvents: newVal,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  render() {
    return (
      <div className="App">
        <Welcome />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEventCount={this.updateEventCount}
        />
        <Container>
          <Row>
            <Col md={6}>
              <EventList events={this.state.events} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
