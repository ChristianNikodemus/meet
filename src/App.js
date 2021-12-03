import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Welcome from "./Welcome.js";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
  state = {
    currentLocation: "all",
    locations: [],
    events: [],
    numberOfEvents: 12,
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

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        currentLocation: location,
        events: locationEvents,
      });
    });
  };

  updateEventCount = async (e) => {
    this.setState({
      numberOfEvents: e,
    });
  };

  render() {
    return (
      <div className="App">
        <Welcome />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEventCount={this.updateEventCount} />
        <EventList
          events={this.state.events.slice(0, this.state.numberOfEvents)}
        />
      </div>
    );
  }
}

export default App;
