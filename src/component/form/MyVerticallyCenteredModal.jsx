import React, { createContext, useContext, useState, useEffect } from "react";
import { Modal, Container, Form, Col, Row, Button } from "react-bootstrap";
import { CalenderContext } from "../../context/CalenderContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from "@fullcalendar/list"; //For List View
import moment from "moment";
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const MyVerticallyCenteredModal = (props) => {

 
 
  const [events, setevents] = useState([]);
  const [startvalue, onChange] = useState("10:00");
  const updatedState = {};
  const [endvalue, onChanges] = useState("10:00");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [Tittle, setTittle] = useState("");
  const [Priority, setPriority] = useState("");
  const [Notes, setNotes] = useState("");
  const [NotesAlert, setNotesAlert] = useState("");
  const [DeleteEvent, setDeleteEvent] = useState("");
  const [show, setShow] = useState(false);
  const [showNotes, setNotesShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNotesClose = () => { setNotesShow(false);window.location.reload(); };
  const handleNotesShow = (thi) => {
    setNotesShow(true);
    const dddv = thi.event.extendedProps;
    console.log(thi.event.id);
    setNotesAlert(dddv.note);
    setDeleteEvent(thi.event.id);
    setNotesShow(true);

  };
 
  const handleDeleteEvent = (deleteId) => {
    console.log("Delete event invoked", deleteId);
    const rememberMe = localStorage.getItem("calenderValue");
    const ddd = JSON.parse(rememberMe);
    let copy = [];
    if (rememberMe) {
      for (var i = 0; i < ddd.length; i++) {
        var storedId = ddd[i].id;
        var deleteId = deleteId.DeleteEvent;
        let result = storedId.localeCompare(deleteId);
         if (result!=0) {
          console.log(ddd[i].startTime);
          const sdate = moment(ddd[i].start).format("ddd MMM D YYYY HH:mm:ss ZZ");
          const edate = moment(ddd[i].end).format("ddd MMM D YYYY HH:mm:ss ZZ");
          const tit = ddd[i].title;
           const lpriority = ddd[i].priority;
           console.log("-----lpriority---------",lpriority);
          const lnote = ddd[i].note;
          const lid = ddd[i].id;
          copy.push({
            id: lid,
            date: new Date(sdate),
            start: new Date(sdate),
            end: new Date(edate),
            title: tit,
          
            backgroundColor: lpriority,
            note: lnote,
          });
        }
      
      }
      
    }
    localStorage.setItem("calenderValue", JSON.stringify(copy));
    window.location.reload();
  };
    
  
 
  useEffect(() => {
    const rememberMe = localStorage.getItem("calenderValue");
    console.log("value from local storage", JSON.parse(rememberMe));
    const ddd = JSON.parse(rememberMe);
    let copy = [];
    console.log("mount it!", ddd);
    if (rememberMe) {
      for (var i = 0; i < ddd.length; i++) {
        console.log(ddd[i].startTime);
        const sdate = moment(ddd[i].start).format("ddd MMM D YYYY HH:mm:ss ZZ");
        const edate = moment(ddd[i].end).format("ddd MMM D YYYY HH:mm:ss ZZ");

        const tit = ddd[i].title;
        const lpriority = ddd[i].priority;
        const lnote = ddd[i].note;
        setPriority(lpriority);
        setTittle(tit);
       // setNotes(ddd[i].note);
        const ooo = moment(new Date()).format("D MMM YYYY");
        const vvvf = moment(new Date(sdate)).format("D MMM YYYY");
        const lid = ddd[i].id;
        var mlpriority = "success";

        copy.push({
          id: lid,
          date: new Date(sdate),
          start: new Date(sdate),
          end: new Date(edate),
          title: tit,
          
          backgroundColor: lpriority,
          note:lnote,
        });
      }
      setevents(copy);
     }
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setTittle(e.target.value.trim());
  };

  const handleNotesChange = (e) => {
    console.log(e.target.value);
    setNotes(e.target.value.trim());
  };

  
  const handlePriChange = (e) => {
    console.log(e.target.value);
    setPriority(e.target.value.trim());
  };

  const loadevents = (e) => {
    console.log("Events loaded ///////////////");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var sHours = startvalue.split(":");
    var eHours = endvalue.split(":");
    console.log(startDate);
    console.log("Priority in submit method -->", Priority);
    console.log(new Date(startDate.setHours(sHours[0], sHours[1], 0)));
    console.log(new Date(startDate.setHours(eHours[0], eHours[1], 0)));
    const copy = [...events];
    copy.push({
      date: new Date(startDate.setHours(sHours[0], sHours[1], 0)),
      start: new Date(startDate.setHours(sHours[0], sHours[1], 0)),
      end: new Date(endDate.setHours(eHours[0], eHours[1], 0)),
      title: Tittle,
      id: Tittle,
      backgroundColor: Priority,
      note:Notes,
    });
    setevents(copy);

    localStorage.setItem("calenderValue", JSON.stringify(copy));
    setShow(false);
    setNotes("");
  };
  return (
    <React.Fragment>
      <Container>
          <Row>
            <Col></Col>
            <Col>
              <Button variant="primary" onClick={handleShow}>
                Add Event
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      <Container>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            listPlugin,
            interactionPlugin,
            googleCalendarPlugin,
          ]}

          googleCalendarApiKey='AIzaSyANPSkbNOKYGdjBBY_Zohktn-sInewZXCg' 

          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
          }}
          eventSources={[{googleCalendarId:'sureshexclusive093@gmail.com'}]}
          events={events}
          eventClick={handleNotesShow}
        />
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Calender Events</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Start Time</Form.Label>{" "}
                    <TimePicker onChange={onChange} value={startvalue} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>End Date</Form.Label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>End Time</Form.Label>{" "}
                    <TimePicker onChange={onChanges} value={endvalue} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Tittle</Form.Label>
                    <Form.Control
                      placeholder="Tittle"
                      name="Tittle"
                      value={Tittle}
                      onChange={(Tittle) => handleChange(Tittle)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control
                      onChange={(Priority) => handlePriChange(Priority)}
                      value={Priority}
                      name="Priority"
                      as="select"
                      defaultValue="Choose..."
                    >
                      <option value="#1fffff">Regular</option>
                      <option value="#ff0000">Important</option>
                      <option value="#1fff1f">Formal</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                      placeholder="Notes"
                      name="Notes"
                      value={Notes}
                      onChange={(Notes) => handleNotesChange(Notes)}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Button variant="primary" type="submit" submitdata>
                    submit
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

       
      <Modal show={showNotes} onHide={handleNotesClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calender Details</Modal.Title>
        </Modal.Header>
          <Modal.Body> Calender Notes :- {NotesAlert}</Modal.Body>
        <Modal.Footer>
        <Button variant="warning" onClick={()=>handleDeleteEvent({DeleteEvent})}>
            Delete Event
          </Button>
         
            <Button variant="secondary" onClick={handleNotesClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNotesClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </Container>
    </React.Fragment>
  );
};

export default MyVerticallyCenteredModal;
