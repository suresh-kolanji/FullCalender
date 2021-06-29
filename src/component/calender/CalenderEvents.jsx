import React, { useContext } from "react";
import Calendar from "react-full-event-calendar";
import MyVerticallyCenteredModal from "../form/MyVerticallyCenteredModal";
import { Container, Row, Col } from "react-bootstrap";
import { CalenderContext } from "../../context/CalenderContext";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const CalenderEvents = (props) => {
  const [events] = useContext(CalenderContext);
  const EventCalendar = require('react-event-calendar');

  const eventss = [
      {
          start: '2015-07-20',
          end: '2015-07-02',
          eventClasses: 'optionalEvent',
          title: 'test event',
          description: 'This is a test description of an event',
      },
      {
          start: '2015-07-19',
          end: '2015-07-25',
          title: 'test event',
          description: 'This is a test description of an event',
          data: 'you can add what ever random data you may want to use later',
      },
  ];
  return (
    <React.Fragment>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <MyVerticallyCenteredModal></MyVerticallyCenteredModal>
        </Col>
      </Row>
      <Row>
        <Col>
        <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  weekends={false}
  events={[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ]}
/>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CalenderEvents;
