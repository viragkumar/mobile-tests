import { Given } from "@wdio/cucumber-framework";
import { LandingPage } from "../pageobjects/landing.page";

Given("User is in the landing page", async () => {
  // Write code here that turns the phrase above into concrete actions
  const oLandingPage = new LandingPage();
  await oLandingPage.acceptCookies();
  await oLandingPage.clickLogin();
});
