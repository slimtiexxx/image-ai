import React, { FC, useState } from "react";
import { Button } from "@UI/Button/Button";
import classNames from "classnames";

export interface CommonFormStepProps {
  currentStep: number;
  setReady: (state: boolean) => void;
  isActive: boolean;
}

interface FormStepperProps {
  steps: Array<FC<CommonFormStepProps & unknown>>;
}

export const FormStepper: FC<FormStepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [ready, setReady] = useState(false);

  return (
    <>
      <div className="absolute top-8 left-auto right-auto flex w-1/2 space-x-2">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className={`h-2.5 w-[${
              (currentStep + 1 / steps.length) * 100
            }%] rounded-full bg-primary transition`}
          ></div>
        </div>
      </div>

      <div className="flex w-full overflow-hidden">
        {steps.map((step, index) => {
          const isLeaving = index < currentStep;
          const willCome = index > currentStep;

          return (
            <div
              className={classNames(
                "absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center transition",
                {
                  "pointer-events-none translate-x-[-50%] opacity-0": isLeaving,
                  "pointer-events-none translate-x-[50%] opacity-0": willCome,
                }
              )}
              key={`form-step-${index}`}
            >
              {step({ currentStep, setReady, isActive: currentStep === index })}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-14 left-auto right-auto flex space-x-2">
        {currentStep !== 0 && (
          <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
        )}
        {ready && (
          <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
        )}
      </div>
    </>
  );
};
