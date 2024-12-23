import "./style.css"
import { useState } from "react";
function StepProgressBar() {
     const [activeStep, setActiveStep] = useState(0);
      const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
    

    function handlePreviousStep() {
      setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    }
  
    function handleNextStep() {
      setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    }
  
    function calculateCurrentStepWidth() {
      return `${(100 / (steps.length - 1)) * activeStep}%`;
    }
  
    return (
      <div>
        <div className="steps">
          {steps && steps.length > 0
            ? steps.map((stepItem, index) => (
                <div className={`step ${index <= activeStep ? 'active' : ''}`} style={{ width: '1%'}} key={index}>
                  {stepItem}
                </div>
              ))
            : null}
        </div>
        <div className="step-buttons-wrapper">
          <button disabled={activeStep === 0} onClick={()=>setActiveStep(activeStep-1)}>
            Previous Step
          </button>
          <button
            disabled={activeStep === steps.length - 1}
            onClick={()=>setActiveStep(activeStep+1)}
          >
            Next Step
          </button>
        </div>
      </div>
    );
  }
  
  export default StepProgressBar;