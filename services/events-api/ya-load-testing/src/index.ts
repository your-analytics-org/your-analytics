import { Command, flags } from "@oclif/command";
import { formatISO, startOfMonth, sub } from "date-fns";

import { sendEvent } from "./api";

class YaLoadTesting extends Command {
  static description = "describe the command here";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    from: flags.string({
      char: "f",
      default: () =>
        formatISO(
          startOfMonth(
            sub(new Date(), {
              months: 3,
            })
          ),
          { representation: "date" }
        ),
      description: "The first day for which to generate events.",
    }),
    to: flags.string({
      char: "t",
      default: () => formatISO(new Date(), { representation: "date" }),
      description: "The last day (inclusive) for which to generate events.",
    }),
    min: flags.string({
      default: "0",
      description: "The minimum number of events to create for a given period.",
    }),
    max: flags.string({
      default: "50",
      description: "The maximum number of events to create for a given period.",
    }),
    period: flags.string({
      char: "p",
      default: "hour",
      description: "The period for which the min/max flags apply.",
      options: ["hour", "day", "month"],
    }),
  };

  async run() {
    const { flags } = this.parse(YaLoadTesting);

    this.log(`Running load testing with flags: %o`, flags);

    await sendEvent({
      name: "pageview",
      domain: "local-testing.com",
      url: "http://local-testing.com/tests",
      referrer: "http://www.test-referrer.com",
      screen_size: 800,
      timestamp: new Date(2020, 5, 28, 12, 13, 14),
    });
    this.log("Load testing completed.");
  }
}

export = YaLoadTesting;
