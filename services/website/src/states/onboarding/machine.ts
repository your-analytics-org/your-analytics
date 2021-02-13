import { createMachine, MachineConfig } from "xstate";
import createStep1Machine from "./step1";
import createStep2Machine from "./step2";

interface OnboardingContext {}

type OnboardingEvent = { type: "NEXT_STEP" };

type OnboardingState =
  | {
      value: "step1";
      context: OnboardingContext;
    }
  | {
      value: "step2";
      context: OnboardingContext;
    };

export default (services) => {
  const actions = {};

  const options = {
    actions,
    services,
  };
  console.log("Creating machine");

  return createMachine<OnboardingContext, OnboardingEvent, OnboardingState>(
    {
      id: "onboarding",
      initial: "step1",
      states: {
        step1: {
          invoke: {
            id: "step1-service",
            src: createStep1Machine(services),
            onDone: "step2",
          },
        },
        step2: {
          invoke: {
            src: createStep2Machine(services),
            onDone: "step3",
          },
        },
        step3: {
          type: "final",
        },
      },
    },
    options
  );
};
