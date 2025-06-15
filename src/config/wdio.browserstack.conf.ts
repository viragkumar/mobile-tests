import { config } from "./wdio.conf.js";

export const bsconfig = {
  ...config,
  user: process.env.BS_USER,
  key: process.env.BS_ACCESS_KEY,
  hostname: "hub.browserstack.com",
  port: 443,
  protocol: "https",
  services: ["browserstack"],
  // ...other shared BrowserStack config...
};
