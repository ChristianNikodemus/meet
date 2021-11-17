import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <ul className="EventList">
              {events.map((event) => (
                <li key={event.id}>
                  <Event event={event} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventList;
