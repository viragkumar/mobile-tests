import { config } from "./wdio.conf.js";

exports.config = {
  ...config,
  services: ["appium"],
  port: 4723,
  capabilities: [
    {
      platformName: "Android",
      //   "appium:deviceName": "Android Emulator",
      "appium:platformVersion": "13.0",
      "appium:app": process.env.ANDROID_APP_PATH || "/path/to/your/app.apk",
      "appium:autoGrantPermissions": true,
    },
  ],
  // ...other local-specific config...
};
export { config };
