import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container>
        <Row as="ul" className="EventList d-flex justify-content-center">
          {events.map((event) => (
            <Col as="li" key={event.id} lg={6}>
              <Event event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default EventList;