import React from "react";
// import { FormGroup,  Input , Form} from "reactstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from "reactstrap";
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
const Step1 = props => {
    if (props.currentStep !== 1) {
        return null;
    }
   
    return (
        <>
            <p>How can we reach you?</p>
            {/* <Form>
      
        
      <FormGroup >
        
       
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>

      </Form> */}
            <Form padding="10px">
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2"  >
                        <Col>
                            <Form.Control required placeholder="First name" onChange={props.handleChange} value={props.firstname} name="firstname" ></Form.Control>
                        </Col>
                    </Form.Group >
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                            <Form.Control placeholder="Middle name" onChange={props.handleChange} value={props.middlename} name="middlename" />
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                            <Form.Control placeholder="Last name" onChange={props.handleChange} value={props.lastname} name="lastname" required/>
                        </Col>
                    </Form.Group >
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                            <Form.Control placeholder="Mobile No"  type="number" onChange={props.handleChange} value={props.mobileno} name="mobileno"/>
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                        <Col>
                            <Form.Control placeholder="Email" type="email" onChange={props.handleChange} value={props.email} name="email"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                    <Col>
                        <Form.Control placeholder="Birthday"  type="date" onChange={props.handleChange} value={props.birthday} name="birthday" />
                    </Col>
                    </Form.Group>
               </Row>
            
            <Row>
                <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                    <Col>
                        <Form.Control placeholder="Age" type="number" onChange={props.handleChange} value={props.age} name="age"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                    <Col>
                    <Form.Select defaultValue="Choose..." onChange={props.handleChange} value={props.bloodgroup} name="bloodgroup">
                  
    <option>A-</option>
 <option>B+</option>
    <option>B-</option>
  <option>AB+</option>
    <option>AB-</option>
   <option>O+</option>
    <option>O-</option>
   
  
          </Form.Select>
                    </Col>
                </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                <Col>
                    <Form.Control placeholder="Height" type="number" onChange={props.handleChange} value={props.height} name="height" />
                </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                <Col>
                    <Form.Control placeholder="Weight" type="number" onChange={props.handleChange} value={props.weight} name="weight"/>
                </Col>
                </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                <Col>
                <h5>Gender</h5>
                    <input type="radio" id="html"  value="HTML" onClick={props.handleChange} value={props.gender} name="gender" />
                    <label for="html">Male</label> <nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
                    <input type="radio" id="html"  value="HTML" onClick={props.handleChange} value={props.gender} name="gender" />
                    <label for="html">Female</label>
                </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail" className="m-2">
                <Col>
                <h5>Marital Status</h5>
                   <input type="radio" id="html"  onChange={props.handleChange} value={props.mstatus} name="mstatus" />
                    <label for="html">Single</label><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
                    <input type="radio" id="html"  onChange={props.handleChange} value={props.mstatus} name="mstatus" />
                    <label for="html">Married</label><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
                    <input type="radio" id="html"  onChange={props.handleChange} value={props.mstatus} name="mstatus" />
                    <label for="html">Divorced</label><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
                    <input type="radio" id="html"  onChange={props.handleChange} value={props.mstatus} name="mstatus" />
                    <label for="html">Widowed</label><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/><nbsp/> <nbsp/>
                </Col>
                </Form.Group>
            </Row>
          
        </Form>
    
                
    </>
  );
};

export default Step1;
