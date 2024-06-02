/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <div>No steps to display</div>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div
              ref={(el) => (stepRef.current[index] = el)}
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isCompleted ? 'complete' : ''
              }
            ${currentStep === index + 1 ? 'active' : ''}
            `}>
              <div className="step-number">
                {currentStep > index + 1 || isCompleted ? '✔' : index + 1}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}>
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}></div>
        </div>
      </div>

      <ActiveComponent />

      {!isCompleted && (
        <button className="button" onClick={handleNext}>
          {currentStep === stepsConfig.length ? 'Finish' : 'Next'}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
