import { Given, Then, When } from '@wdio/cucumber-framework';
import { LandingPage } from '../pageobjects/landing.page';

const oLandingPage = new LandingPage();

Given('User is in the landing page', async () => {
	// Write code here that turns the phrase above into concrete actions
	await oLandingPage.acceptCookies();
	await oLandingPage.clickLogin();
});

When(/^User (.*) logins to OSSR$/, async (user: string) => {
	// Write code here that turns the phrase above into concrete actions
	console.log(`User ${user} is logging in to OSSR`);
	if (user === 'ElectricityOnly') {
		await oLandingPage.acceptCookies();
	}
});

Then('User is on the home page', () => {
	// Write code here that turns the phrase above into concrete actions
	console.log('User is on the home page');
});
