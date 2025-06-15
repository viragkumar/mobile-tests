import { config } from "./wdio.conf.js";

exports.config = {
  ...config,
  services: ["chromedriver"],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-infobars"],
      },
    },
  ],
  // ...other local-specific config...
};
export { config };
