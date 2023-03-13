/*
 * This Multi-Step-Form was created using the tutorial found on CSS-Tricks.com
 * https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
 */

import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "./Componants/MasterForm";
// import App from "./App";
import { Container, Row, Col } from "reactstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: lightgray; }"}</style>
        
      </Helmet>
      <Container>
        <Row>
          <Col>
            <MasterForm />
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
