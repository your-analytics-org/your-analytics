import { assign } from "xstate";

const fetchStats = (url: string) => {
  console.log("TODO: fetch stats for website: %s", url);
};

export default {
  // initial: 'idle',
  // states: {
  //   idle: {
  //     on: {
  //       FETCH_STATS: 'fetching'
  //     }
  //   },
  //   fetching: {
  //     invoke: {
  //       id: 'fetchStats',
  //       src: (context, event) => fetchStats(context.step2.url),
  //       onDone: {
  //         target: 'success',
  //         actions: assign({ urlStats: (_context, event) => event.data })
  //       },
  //       onError: {
  //         target: 'failure',
  //         actions: assign({ error: (_context, event) => event.data })
  //       }
  //     }
  //   },
  //   success: {
  //     type: 'final'
  //   },
  //   failure: {
  //     after: {
  //       5000: 'fetching'
  //     }
  //   }
  // }
};
