import React, { Component } from 'react';
import itemservice from "../API/itemservice.js";

export default class additems extends Component {
    constructor(props){
        super(props);
        this.state={
            ID:"",
            traderName:""
        }
      }

      handleInputChange = (e) =>{
        const {name,value} = e.target;
    
        this.setState({
          ...this.state,
          [name]:value
        })
    
      }
      onSubmit = (e) =>{

        e.preventDefault();
    
        const {ID,traderName} = this.state;
    
        const data ={
          ID:ID,
          traderName:traderName
        }
        console.log(data)
    

    axios.post('http://localhost:3000/items',item).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              ID:"",
              traderName:""
            }
          )
        }
      })
  
    }
  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create new post</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} >ID</label>
            <input type="text"
            className="form-control"
            name="ID"
            placeholder="Enter Topic"
            value={this.state.ID}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Trader Name</label>
            <input type="text"
            className="form-control"
            name="traderName"
            placeholder="Enter Desciption"
            value={this.state.traderName}
            onChange={this.handleInputChange}/>
          </div>


  

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Save
          </button>
        
        
        </form>
        
      </div>
    )
  }
}
