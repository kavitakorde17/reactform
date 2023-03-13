import React from "react";
import "./MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = props => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div>
    <ProgressBar percent={stepPercentage} >
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      
    </ProgressBar>
</div>
    // <form id="msform">

    //   <ul id="progressbar">
    //     <li class="active" id="account"><strong>Account</strong></li>
    //     <li id="personal"><strong>Personal</strong></li>
    //     <li id="payment"><strong>Image</strong></li>
    //     <li id="confirm"><strong>Finish</strong></li>
    //   </ul>
    //   <div className="progress">
    //     <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100">

    //     </div>
    //  </div>
    // </form>

  );
};

export default MultiStepProgressBar;
