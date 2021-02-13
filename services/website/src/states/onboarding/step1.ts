import { createMachine, MachineConfig } from "xstate";

interface Step1Context {
  firstName?: string;
  error?: string;
}

type Step1Event = { type: "SAVE" } | { type: "RESOLVE" } | { type: "REJECT" };

type Step1State =
  | {
      value: "empty";
      context: Step1Context & {
        firstName: undefined;
        error: undefined;
      };
    }
  | {
      value: "saving";
      context: Step1Context & {
        firstName: string;
        error: undefined;
      };
    }
  | {
      value: "failure";
      context: Step1Context & {
        firstName: undefined;
        error: string;
      };
    };

export default (services) => {
  const actions = {};

  const options = {
    actions,
    services,
  };

  console.log("STEP1 createMachine STEP1");

  return createMachine<Step1Context, Step1Event, Step1State>(
    {
      id: "step1",
      initial: "empty",
      states: {
        empty: {
          on: {
            SAVE: "saving",
          },
        },
        saving: {
          entry: () => {
            console.log("JJJJJJJJJJJ");
          },
          on: {
            RESOLVE: "resolved",
            REJECT: "rejected",
          },
        },
        resolved: {
          type: "final",
        },
        rejected: {
          type: "final",
        },
      },
    },
    options
  );
};
