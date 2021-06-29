import React from 'react'
import './App.css'

import Calendar from "react-full-event-calendar";
import moment from 'moment'
import $ from 'jquery'
import 'bootstrap';
import EventModal from './EventModal';
import Modal, {closeStyle} from 'simple-react-modal'
import TimePicker from 'react-time-picker';
import 'bootstrap'




const events = [
    {
      startTime: new Date(moment().add(2, "hour")),
      endTime: new Date(moment().add(3, "hour")),
      title: "working in the weekend"
    },
    {
      startTime: new Date(moment().add(-3, "hour")),
      endTime: new Date(moment().add(-2, "hour")),
      title: "working in the weekend"
    },
    {
      startTime: new Date(),
      endTime: new Date(moment().add(1, "hour")),
      title: "working in the weekend"
    }
  ];


  

class EventCal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
       
       
        
      

handleClick(){
  console.log("IS")
//  <EventModal/>
}
     



    render(){

        return(
            <div>
             <button type="button" class="btn btn-primary" onClick={e=>this.handleClick(e)}>Add Event</button>
                <Calendar events={events}
               
        />;
               
                
            </div>
        )
    }

}


export default EventCal