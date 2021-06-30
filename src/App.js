import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import CalenderEvents from "./component/calender/CalenderEvents";
import { CalenderProvider } from "./context/CalenderContext";
function App() {
  return (
    <div>
      <CalenderProvider>
        <Container>
          {" "}
          <CalenderEvents></CalenderEvents>
        </Container>
      </CalenderProvider>
    </div>
  );
}
export default App;
