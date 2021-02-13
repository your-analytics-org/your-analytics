import { createMachine, MachineConfig } from "xstate";

interface Step2Context {
  url?: string;
  timezone?: string;
  error?: string;
}

type Step2Event = { type: "SAVE" } | { type: "RESOLVE" } | { type: "REJECT" };

type Step2State =
  | {
      value: "empty";
      context: Step2Context & {
        url: undefined;
        timezone: undefined;
        error: undefined;
      };
    }
  | {
      value: "saving";
      context: Step2Context & {
        url: string;
        timezone: string;
        error: undefined;
      };
    }
  | {
      value: "failure";
      context: Step2Context & {
        url: undefined;
        timezone: undefined;
        error: string;
      };
    };

export default (services) => {
  const actions = {};

  const options = {
    actions,
    services,
  };

  console.log("STEP2 createMachine STEP2");

  return createMachine<Step2Context, Step2Event, Step2State>(
    {
      id: "step2",
      initial: "empty",
      states: {
        empty: {
          on: {
            SAVE: "saving",
          },
        },
        saving: {
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
