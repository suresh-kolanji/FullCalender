import React from 'react';
import Calendar from 'react-calendar';
import './App.css'

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import EventForm from './ScheduleForm';
import TimePicker from 'react-time-picker';
import 'bootstrap';
// import * as fs from 'browserify-fs';






class CalenderCom extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      title: '',
      task: '',
      time: '',
      worktype: ''
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeTask = this.handleChangeTask.bind(this)
    this.handleChangeTime = this.handleChangeTime.bind(this)
    this.handleChangeWorkType = this.handleChangeWorkType.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    console.log(this.state.date, "Monish")
  }



  //   const [value, onChange] = useState(new Date());
  //   console.log(value)




  handleChange = (e) => {
    this.setState({
      date: e,
    })
  
  }



  onSubmit = (e) => {
    
    e.preventDefault()
    console.log(this.state  ,"LETS")
    this.setState({
      date:'',
      title: '',
      task: '',
      time: '',
      worktype:''
    })
    $("#exampleModal").modal("hide")
    ;
    // var fs = require('browserify-fs');

    // fs.mkdir('C:\PROJECT\calender\files', function() {
    //   fs.writeFile('C:\PROJECT\calender\files\hello-world.txt', 'Hello world!\n', function() {
    //     fs.readFile('C:\PROJECT\calender\files\hello-world.txt', 'utf-8', function(err, data) {
    //       console.log(data);
    //     });
    //   });
    // });

    var fileContents = JSON.stringify(this.state, null, 2);
    var fileName = "DATA/data.json";
    
    var pp = document.createElement('a');
    pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents));
    pp.setAttribute('download', fileName);
    pp.click();
  }


  handleChangeTitle(e) {
    
    this.setState({ title: e.target.value })

  }

  handleChangeTask(e) {
    this.setState({ task: e.target.value })
  }

  handleChangeTime(e) {
    
    this.setState({ time: e})
  }

  handleChangeWorkType(e) {
    this.setState({ worktype: e.target.value })
  }




//   onClick=(e,saveAs)=>{
//     var blob = new Blob(["Welcome to Websparrow.org."],
//     { type: "text/plain;charset=utf-8" });
// saveAs(blob, "static.txt");
//   }
  



  render() {

    return (
      <div>
        
        <Calendar
          onChange={e => this.handleChange(e)}
          value={this.state.date}

          

        >      </Calendar>
        

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={e=>this.onSubmit(e)} >
                  {/* <div class="form-group">
                    <label for="floatingInput" class="col-form-label" id="floatingInput" >Add Title:</label>
                    <input type="title" class="form-control" id="floatingInput" name='title' />
                  </div>
                  <div class="form-group">
                    <label for="floatingInput2" class="col-form-label" id="floatingInput2">Add task:</label>
                    <input type="task" class="form-control" id="floatingInput2" name="task" />
                  </div> */}

                  <div class='form-floating'>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.title} id="title" name="title" className="form-control" onChange={this.handleChangeTitle} />
                  </div>

                  <div class='form-floating'>
                    <label htmlFor="task">Task</label>
                    <input type="text" value={this.state.task} id="task" name="task" className="form-control" onChange={this.handleChangeTask} />
                  </div>


                  <div class='form-floating'>
                    <label htmlFor="time">Time</label>
                    <div>
                      <TimePicker value={this.state.time}  name="time" id="time" type="number" className="form-contol" onChange={e=>this.handleChangeTime(e)}/>
                    </div>
                  </div>



                  <div class="form-floating">
                    <select class="form-select" id="worktype" name="worktype" value={this.state.worktype} onChange={this.handleChangeWorkType}>
                      <option selected>Select</option>
                      <option value="Personal">Personal</option>
                      <option value="Oficial">Official</option>
                      <option value="Physical">Work</option>
                    </select>
                  </div>


                  <div class="modal-footer">
                <button type="submit" id="save" className="btn btn-primary btn-block" >Save</button>
                <button type="button" className="btn btn-primary btn-block" data-dismiss="modal">Close</button>

              </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
        {/* 
<Popup trigger={<button> <EventForm/></button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}

        {/* <EventForm/> */}
      </div>
    );
  }
}
export default CalenderCom;