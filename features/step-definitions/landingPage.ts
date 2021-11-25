import { Given, Then, When } from '@wdio/cucumber-framework';
import landingPage from '../pageobjects/landing.page';

Given(/^I am on the Landing page of herokuapp$/, async () => {
    await landingPage.openapp();
});
Then(/^I should see a header text \"([^\"]*)\"$/, async (welcometotheinternet) => {
    await expect(landingPage.headerElement).toHaveText(welcometotheinternet)
});
When(/^I click on chechbox menu$/, async () => {
    await landingPage.clickoncheckboxmenu();
});
Then(/^I should be navigated to checkbox page$/, async () => {
    await expect(landingPage.checkboxHeader).toBeDisplayed();
    expect(browser).toHaveUrlContaining("checkboxes");
});
Then(/^I validate checkbox2 is selected$/, async () => {
    await expect(landingPage.checkbox2Ele).toBeSelected();
});
Then(/^I validate checkbox1 is selected$/, async () => {
    await expect(landingPage.checkbox1Ele).toBeSelected();
});
