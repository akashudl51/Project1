import React, { Component } from 'react'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css'
import {Button,Modal} from 'react-bootstrap';
export default class UserEdit extends Component {
    constructor(props)
  {
    super(props)
    this.state={
      show:false,
      email:this.props.useremail
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
 
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    console.log(this.state.email)
    axios.patch(`${process.env.REACT_APP_UNSPLASH_URL}/userupdate/${this.props.srno}`,{
      email:this.state.email, 
    }).then((response) => {
      console.log("data submitted sucessfully")
      })
      .catch((error) => {
        console.log("Error is their ")
    })


  }

  handleonclick=()=>
  {
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <div>
                 <button onClick={()=>{this.handleonclick()}} className="editbutton"> View</button>
        <Modal
        show ={this.state.show}>
        <Modal.Header><b>Edit Email Id</b></Modal.Header>
        <Modal.Body>
        <form onSubmit={this.handleSubmit}>
        <span><b>Email-Id</b>
           <textarea type="textarea" name="email" style={{width:"100%",height:"100px"}} value={this.state.email} onChange={this.handleChange} required></textarea>
        </span>
        
        
        
        
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{this.handleonclick()}}>
            Close
          </Button>
          <Button onClick={this.handleSubmit}>
             Save
          </Button>
        </Modal.Footer>


        </Modal>
      </div>
    )
  }
}
