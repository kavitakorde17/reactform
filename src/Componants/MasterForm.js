import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      firstname: "",
      middlename:"",
      lastname:"",
      mobileno:"",
      email:"",
      birthday:"",
      age:"",
      bloodgroup:"",
      height:"",
      weight:"",
      gender:"",
      mstatus:"",
      password:"",
      addl1:"",
      addl2:"",
      city:"",
      state:"",
      country:"",
      pincode:""
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  con
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1&&currentStep !== 3) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }



  render() {
    // const { currentStep,firstname, middlename, lastname, mobileno, email, birthday, age, bloodgroup, height, weight,gender, mstatus, password, addl1, city,state, country,pincode } = this.state;
    // const inputValues = { currentStep,firstname, middlename, lastname, mobileno, email, birthday, age, bloodgroup, height, weight,gender, mstatus, password, addl1, city,state, country,pincode  };
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card style={{overflow:"hidden"}}>
            <CardHeader>Create an Account</CardHeader>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
               
                firstname={this.state.firstname}
      middlename={this.state.middlename}
      lastname={this.state.lastname}
      mobileno={this.state.mobileno}
      email={this.state.email}
      birthday={this.state.birthday}
      age={this.state.age}
      bloodgroup={this.state.bloodgroup}
      height={this.state.height}
      weight={this.state.weight}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                
                gender={this.state.gender}
      mstatus={this.state.mstatus}
      password={this.state.password}
      addl1={this.state.addl1}
      addl2={this.state.addl2}
      city={this.state.city}
      state={this.state.state}
      country={this.state.country}
      pincode={this.state.pincode}
      
      // inputValues={inputValues}
                
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                // inputValues={inputValues} 
                email={this.state.email}
                firstname={this.state.firstname}
      middlename={this.state.middlename}
      lastname={this.state.lastname}
      mobileno={this.state.mobileno}
      birthday={this.state.birthday}
      age={this.state.age}
      bloodgroup={this.state.bloodgroup}
      height={this.state.height}
      weight={this.state.weight}
      username={this.state.username}
      gender={this.state.gender}
mstatus={this.state.mstatus}
password={this.state.password}
addl1={this.state.addl1}
addl2={this.state.addl2}
city={this.state.city}
state={this.state.state}
country={this.state.country}
pincode={this.state.pincode}
              />
              
            </CardBody>
            <CardFooter>
              {this.previousButton}
              <nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
              <nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
              <nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
              <nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
              {this.nextButton}
             
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;
