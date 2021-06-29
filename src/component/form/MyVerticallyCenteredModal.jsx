import React, { createContext, useContext, useState, useEffect } from "react";
import { Modal, Container, Form, Col, Row, Button } from "react-bootstrap";
import { CalenderContext } from "../../context/CalenderContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import moment from "moment";
const MyVerticallyCenteredModal = (props) => {
  const [events, setevents] = useContext(CalenderContext);
  const [startvalue, onChange] = useState("10:00");
  const updatedState = {};
  const [endvalue, onChanges] = useState("10:00");

  const [startDate, setStartDate] = useState(new Date());

  const [Tittle, setTittle] = useState("");
  const [Priority, setPriority] = useState("");

  useEffect(() => {
    const rememberMe = localStorage.getItem("calenderValue");
    console.log("value from local storage", JSON.parse(rememberMe));
    const ddd = JSON.parse(rememberMe);
    let copy=[];
    console.log("mount it!", ddd);
    if (rememberMe) {
      for (var i = 0; i < ddd.length; i++) {
        console.log(ddd[i].startTime);
        const sdate = moment(ddd[i].startTime).format('ddd MMM D YYYY HH:mm:ss ZZ');
        const edate = moment(ddd[i].endTime).format('ddd MMM D YYYY HH:mm:ss ZZ');
        const tit =ddd[i].title;
        const lpriority=ddd[i].priority;   
        setPriority(lpriority); 
        setTittle(tit);   

         const ooo=moment(new Date()).format('D MMM YYYY');
        const vvvf=moment(new Date(sdate)).format('D MMM YYYY');
        var mlpriority="success";

if(ooo===vvvf){

////Notificatins start/////
store.addNotification({
  title: "Calender Notification",
  message: tit,
  type: lpriority,
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  },
  width:600
});

}

        copy.push({
          startTime: new Date(sdate),
            endTime: new Date(edate),
            title: tit,
            priority:lpriority,
            }); 
      }
      setevents(
        copy,
      );
   console.log("--------Tittle-------------",Tittle);
   console.log("--------Priority-----------",Priority);
    }


  }, []);
  
  
  const handleChange = (e) => {
    console.log(e.target.value);
    setTittle(e.target.value.trim());
  };

  const handlePriChange = (e) => {
    console.log(e.target.value);
    setPriority(e.target.value.trim());
  };


  const loadevents =(e) =>{
    console.log('Events loaded ///////////////');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    var sHours = startvalue.split(":");
    var eHours = endvalue.split(":");
    console.log(startDate);
    console.log("Priority in submit method -->",Priority);
    console.log(new Date(startDate.setHours(sHours[0], sHours[1], 0)));
    console.log(new Date(startDate.setHours(eHours[0], eHours[1], 0)));
    const copy=[...events]
    copy.push({
      startTime: new Date(startDate.setHours(sHours[0], sHours[1], 0)),
        endTime: new Date(startDate.setHours(eHours[0], eHours[1], 0)),
        title: Tittle,
        priority:Priority,
    }); 
    setevents(
      copy
    );

    localStorage.setItem("calenderValue", JSON.stringify(copy));
  };
  return (
    <React.Fragment>
      <Container>
      <ReactNotification />
        <Form onSubmit={handleSubmit}>
        <Form.Row>
            <Col>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Date</Form.Label>  
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              </Form.Group>
            </Col>
            <Col>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Start Time</Form.Label>   <TimePicker onChange={onChange} value={startvalue} /></Form.Group>
            </Col>
            <Col>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>End Time</Form.Label>     <TimePicker onChange={onChanges} value={endvalue} />
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
      <Form.Control onChange={(Priority) => handlePriChange(Priority)}  value ={Priority} name="Priority" as="select" defaultValue="Choose...">
      <option value = "success">Regular</option>
        <option value = "warning">Important</option>
     
      </Form.Control>
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
      </Container>
    </React.Fragment>
  );
};

export default MyVerticallyCenteredModal;
