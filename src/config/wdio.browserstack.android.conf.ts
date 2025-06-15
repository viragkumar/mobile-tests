import { bsconfig } from "./wdio.browserstack.conf";

export const androidConfig = {
  ...bsconfig,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": process.env.BS_DEVICE_NAME_ANDROID || "*.*",
      "appium:platformVersion":
        process.env.BS_DEVICE_OS_VERSION_ANDROID || "1[0123456]", // Example: "11", "12", or "13"
      "appium:app": process.env.BS_APP_ID_ANDROID, // Replace with your app ID
      "appium:autoGrantPermissions": true,
      "appium:bsoptions": {
        projectName: "My Android Project",
        buildName: "Android Build 1.0",
        sessionName: "Android App Test",
        debug: true,
        networkLogs: true,
      },
    },
  ],
  // ...other BrowserStack-specific config...
};
export { androidConfig as config };
