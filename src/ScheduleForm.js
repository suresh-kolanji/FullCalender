import React, {useState} from 'react'
import './css/EventForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TimePicker from 'react-time-picker';
import $ from 'jquery'
import 'bootstrap';

// const $ = window.$;


class EventForm extends React.Component{
  

  
   
    constructor(props) {
        super(props);
        this.state = {
          value:'10:00',
        }
      }

      handleClick=(e)=>{
        $("#exampleModal").modal("show");
      }
      

    render(){
      // var button = (this.event.relatedTarget) 
      // var recipient = button.data('whatever')
     
      // var modal = (this)
      // modal.find('.modal-title').text('New message to ' + recipient)
      // modal.find('.modal-body input').val(recipient)
       
        return(
        
           <div>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" onClick={e=>this.handleClick(e)}>Open modal for @mdo</button>
             <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="floatingInput" class="col-form-label"  id="floatingInput" >Add Title:</label>
            <input type="title" class="form-control" id="floatingInput" onChange={this.handleChange2} value={this.state.title}/>
          </div>
          <div class="form-group">
            <label for="floatingInput2" class="col-form-label" id="floatingInput2">Add task:</label>
            <input type="task" class="form-control" id="floatingInput2" onChange={this.handleChange2} value={this.state.task}/>
          </div>

          <div>
      <TimePicker
       
        value={this.state.value}
      />
    </div>

    <div class="form-floating">
<select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">Personal</option>
  <option value="2">Official</option>
  <option value="3">Work</option>
</select>
</div>
        </form>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
             </div>
            



              
               
           
        )
    }
}

export default EventForm