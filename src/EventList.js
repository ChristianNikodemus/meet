import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <ul className="EventList d-flex justify-content-center">
            {events.map((event) => (
              <Col md={6}>
                <li key={event.id}>
                  <Event event={event} />
                </li>
              </Col>
            ))}
          </ul>
        </Row>
      </Container>
    );
  }
}

export default EventList;
