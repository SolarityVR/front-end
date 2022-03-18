import React from "react";
import { Wizard, useWizard } from "react-use-wizard";

import SquadStep from "modules/Marketplace/Create/Steps/Sqad";
import Voting from "modules/Marketplace/Create/Steps/Voting";
import TemplateStep from "modules/Marketplace/Create/Steps/Template";
import SizeStep from "modules/Marketplace/Create/Steps/Size";
import AssignStep from "modules/Marketplace/Create/Steps/Assign";
import EconomicsStep from "modules/Marketplace/Create/Steps/Economics";
import Review from "modules/Marketplace/Create/Steps/Review";

const Footer = () => {
  const {
    nextStep,
    previousStep,
    isLoading,
    activeStep,
    stepCount,
    isLastStep,
    isFirstStep,
  } = useWizard();

  console.log("Rendering footer");

  console.log({activeStep})

  return (
    <div className={`mt-10 flex justify-between w-full`}>
        {!isFirstStep ? (
        <button
          className="rounded-full btn btn-secondary"
          onClick={previousStep}
        >
          Back
        </button>
      ) : (
        <div />
      )}
      {!isLastStep ? (
        <button className="rounded-full btn btn-secondary" onClick={nextStep}>
          Continue
        </button>
      ) : (
        <div />
      )}

      {isLastStep && (
        <button className="rounded-full btn btn-secondary">Finish</button>
      )}
    </div>
  );
};

const Create = () => {
  return (
    <div className="relative ">
      <Wizard footer={<Footer />}>
        <SquadStep />
        <AssignStep />
        <TemplateStep />
        <SizeStep />
        <EconomicsStep />
        <Voting />
        <Review />
      </Wizard>
    </div>
  );
};

export default Create;
