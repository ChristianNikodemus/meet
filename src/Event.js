import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import moment from "moment";
moment().format();

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

    return (
      <Card className="event">
        <Card.Header as="h2" className="summary">
          {event.summary}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p className="start-date">
              Event Start Date: {/*moment()*/ event.start.dateTime}
            </p>
            <p>Timezone: {event.start.timeZone}</p>
            <p className="location">Event location: {event.location}</p>
          </Card.Text>
          <Button
            variant="primary"
            className={`${collapsed ? "show" : "hide"}-details-btn`}
            onClick={this.handleClick}
          >
            {collapsed ? "Show Details" : "Hide Details"}
          </Button>
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
      </Card>
    );
  }
}
export default Event;
