import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Welcome from "./Welcome.js";
import EventGenre from "./EventGenre";
import EventNumber from "./EventNumber";
import WelcomeScreen from "./WelcomeScreen";
import { WarningAlert } from "./Alert";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import "./nprogress.css";

class App extends Component {
  state = {
    currentLocation: "all",
    locations: [],
    events: [],
    numberOfEvents: 12,
    showWelcomeScreen: undefined,
    warningText: !navigator.onLine
      ? "You are offline! This means the list of events is loaded from cache files. This means that the events may not be completely up to date until you connect online again."
      : "",
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
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
    const events = this.state.events.slice(0, this.state.numberOfEvents);

    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        <Welcome />
        <WarningAlert text={this.state.warningText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEventCount={this.updateEventCount} />
        <div className="data-vis-wrapper">
          {/* <p>Genre of events</p> */}
          <EventGenre events={events} />

          {/* <p>Events in each city</p> */}
          <EventNumber events={events} locations={this.state.locations} />
        </div>

        <EventList events={events} />

        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
