import React, { useContext } from "react";
import MyVerticallyCenteredModal from "../form/MyVerticallyCenteredModal";
import { Container, Row, Col } from "react-bootstrap";

const CalenderEvents = (props) => {
  
  return (
    <React.Fragment>
      <Row>
        <Col>
          <div>
            <p>&lt; </p>
          </div>
        </Col>
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
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CalenderEvents;
