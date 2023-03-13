import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useMemo } from 'react';
// import Select from 'react-select-country-list'
import countryList from 'react-select-country-list'
import Select from 'react-select'
const Step2 = props => {
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  if (props.currentStep !== 2) {
    return null;
  }
  

  return (
    <>
      <p>What should we call you?</p>
      <Form>
      <Row>
     
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2" >
                        <Col>
                        <Form.Control placeholder="addl1" onChange={props.handleChange} value={props.addl1} name="addl1"/>
                        </Col>
                    </Form.Group >
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                        <Form.Control placeholder="addl2" onChange={props.handleChange} value={props.addl2} name="addl2"/>
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                            <Form.Control placeholder="City" onChange={props.handleChange} value={props.city} name="city" />
                        </Col>
                    </Form.Group >
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                            <Form.Control placeholder="State" onChange={props.handleChange} value={props.state} name="state"/>
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                        <Select options={options} value={value} onChange={changeHandler} name="country" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                    <Col>
                        <Form.Control placeholder="Pincode" type="number" onChange={props.handleChange} value={props.pincode} name="pincode"/>
                    </Col>
                    </Form.Group>
               </Row>
      </Form>
    </>
  );
};

export default Step2;
