import { Given, Then, When } from "@wdio/cucumber-framework";
import { LandingPage } from "../pageobjects/landing.page";

Given("User is in the landing page", async () => {
  // Write code here that turns the phrase above into concrete actions
  const oLandingPage = new LandingPage();
  await oLandingPage.acceptCookies();
  await oLandingPage.clickLogin();
});

When(/^User (.*) logins to OSSR$/, (user: string) => {
  // Write code here that turns the phrase above into concrete actions
  console.log(`User ${user} is logging in to OSSR`);
});

Then("User is on the home page", () => {
  // Write code here that turns the phrase above into concrete actions
  console.log("User is on the home page");
});
