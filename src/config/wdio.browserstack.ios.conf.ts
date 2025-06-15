import { bsconfig } from "./wdio.browserstack.conf.js";
// This file is for configuring WebdriverIO to run tests on BrowserStack for IOS devices.

export const iosConfig = {
  ...bsconfig,
  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": process.env.BS_DEVICE_NAME_IOS || "iPhone.*", // Default to iPhone 15 Pro if not set
      "appium:platformVersion":
        process.env.BS_DEVICE_OS_VERSION_IOS || "1[45678]", // Example: "14", "15", or "18"
      "appium:app": process.env.BS_APP_ID_IOS, // Replace with your app ID,
      "appium:autoGrantPermissions": true,
      "appium:bsoptions": {
        projectName: "My IOS Project",
        buildName: "IOS Build 1.0",
        sessionName: "IOS App Test",
        debug: true,
        networkLogs: true,
      },
    },
  ],
  // ...other BrowserStack-specific config...
};
export { iosConfig as config };
