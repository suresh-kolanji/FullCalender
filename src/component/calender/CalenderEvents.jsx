import React, { useContext } from "react";
import MyVerticallyCenteredModal from "../form/MyVerticallyCenteredModal";
import { Container, Row, Col } from "react-bootstrap";
import { CalenderContext } from "../../context/CalenderContext";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View
const CalenderEvents = (props) => {
  const [events] = useContext(CalenderContext);
  
  return (
    <React.Fragment>
      <Row>
        <Col><div>
        <p>&lt; </p>
          </div></Col>
      </Row>
      <Row>
        <Col>
          <MyVerticallyCenteredModal></MyVerticallyCenteredModal>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
        <p>&lt; </p>
          </div>
        <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, listPlugin ,interactionPlugin ]}
        initialView="dayGridMonth"
        editable= {true}
        selectable={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        }}
        events={events}
      />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CalenderEvents;
