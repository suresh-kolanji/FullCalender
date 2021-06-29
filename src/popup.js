import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EventForm from './ScheduleForm'
 
export default () => (
  <Popup trigger={<button><EventForm/></button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);