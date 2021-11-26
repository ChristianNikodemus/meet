import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    const time = new Intl.DateTimeFormat("en-US", {
      timeStyle: "long",
    }).format(new Date(event.start.dateTime));

    const date = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(new Date(event.start.dateTime));

    return (
      <Card className="event-card">
        <Card.Header as="h2" className="summary">
          {event.summary}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p className="start-date">Event date: {date}</p>
            <p className="start-date">Event starts at: {time}</p>
            <p>Timezone: {event.start.timeZone}</p>
            <p className="location">Event location: {event.location}</p>
          </Card.Text>
          {!collapsed && (
            <div
              className={`extra-details ${
                this.state.collapsed ? "hide" : "show"
              }`}
            >
              <h3>About the event:</h3>
              <a href={event.htmlLink} role="noopener" target="_blank">
                See details on Google Calendar
              </a>
              <p className="event-description">{event.description}</p>
            </div>
          )}
        </Card.Body>
        <Card.Footer>
          <Button
            variant="primary"
            className={`${collapsed ? "show" : "hide"} details-btn`}
            onClick={this.handleClick}
          >
            {collapsed ? "Show Details" : "Hide Details"}
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
export default Event;
