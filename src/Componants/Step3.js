import React from "react";
import Table from 'react-bootstrap/Table';

import "./Step3.css";
const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }
  // const {inputValues: { currentStep,firstname, middlename, lastname, mobileno, email, birthday, age, bloodgroup, height, weight,gender, mstatus, password, addl1, city,state, country,pincode  }} = props;
  return (
    <>
    <h1 >Data Added Sucessfully</h1>
    <div style={{overflow:"auto"}}>
      <Table striped bordered hover size="sm"   responsive="lg"   className="table" >
       
          <tr >
            <th> Name</th>
            <th>Value</th>
          </tr>
     
      
          <tr>
            <td>Firstname</td>
            <td>{props.firstname}</td>
          </tr>
          <tr>
            <td>middlename</td>
            <td>{props.middlename}</td>
          </tr>
          <tr>
            <td>lastname</td>
            <td>{props.lastname}</td>
          </tr>
          <tr>
            <td>mobileno</td>
            <td>{props.mobileno}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{props.email}</td>
          </tr>
          <tr>
            <td>birthday</td>
            <td>{props.birthday}</td>
          </tr>
          <tr>
            <td>age</td>
            <td>{props.age}</td>
          </tr>
          <tr>
            <td>bloodgroup</td>
            <td>{props.bloodgroup}</td>
          </tr>
          <tr>
            <td>height</td>
            <td>{props.height}</td>
          </tr>
          <tr>
            <td>weight</td>
            <td>{props.weight}</td>
          
          </tr>
          <tr>
            <td>gender</td>
            <td>{props.gender}</td>
          </tr>
          <tr>
            <td>mstatus</td>
            <td>{props.mstatus}</td>
          </tr>
          <tr>
            <td>addl1</td>
            <td>{props.addl1}</td>
          </tr>
          <tr>
            <td>addl2</td>
            <td>{props.addl2}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{props.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{props.state}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{props.country}</td>
          </tr>
          <tr>
            <td>Pincode</td>
            <td>{props.pincode}</td>
          </tr>
     
           
          </Table>
          </div>
        </>
        );
};

        export default Step3;
