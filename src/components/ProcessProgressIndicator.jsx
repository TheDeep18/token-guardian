import React from "react";

const steps = [
  { number: 1, title: "Paste Raw CSS" },
  { number: 2, title: "Review & Semanticize" },
  { number: 3, title: "Generate LLM Prompt" },
];

const ProcessProgressIndicator = ({ currentStep, onStepClick }) => (
  <div className="flex justify-around items-center max-w-3xl mx-auto my-8 p-6 bg-white rounded-xl shadow-xl">
    {steps.map((step, idx) => {
      // Step color logic
      const isActive = currentStep === step.number;
      const isComplete = currentStep > step.number;
      const isReached = currentStep >= step.number;
      // Step circle classes
      const circleClass = isActive
        ? "bg-blue-600 text-white shadow-lg"
        : isComplete
        ? "bg-green-500 text-white"
        : "bg-gray-200 text-gray-500";
      // Step title classes
      const titleClass = isActive
        ? "text-gray-900 font-bold text-base"
        : isComplete
        ? "text-gray-700"
        : "text-gray-500";
      // Step container classes
      const stepClass = isReached ? "text-gray-900" : "text-gray-500";
      // Clickable logic
      const clickable = typeof onStepClick === "function";
      return (
        <React.Fragment key={step.number}>
          <div
            className={`flex flex-col items-center text-center flex-1 relative progress-step ${stepClass} ${clickable ? "cursor-pointer hover:bg-gray-50 rounded-lg" : ""}`}
            onClick={clickable ? () => onStepClick(step.number) : undefined}
            tabIndex={clickable ? 0 : undefined}
            role={clickable ? "button" : undefined}
            aria-label={clickable ? `Go to step ${step.number}` : undefined}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-xl mb-2 transition-all duration-300 ease-in-out step-circle ${circleClass}`}
            >
              {step.number}
            </div>
            <span
              className={`font-medium text-sm transition-all duration-300 ease-in-out whitespace-nowrap step-title ${titleClass}`}
            >
              {step.title}
            </span>
          </div>
          {/* Connector line, except after last step */}
          {idx < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 relative mx-2 transition-all duration-300 ease-in-out ${
                currentStep >= step.number ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export default ProcessProgressIndicator; 