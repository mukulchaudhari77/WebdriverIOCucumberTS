import { Given, Then, When } from "@cucumber/cucumber";
import dynamicPage from '../pageobjects/dynamic.page';

Given(/^I am on dynamic loading page$/, async () => {

    await browser.url("http://the-internet.herokuapp.com/dynamic_loading/2");
    await browser.maximizeWindow();
})

When("I click on Start button", async () => {
    await dynamicPage.startBtn.click()
})

Then("I validate dynamic element is appearing", async () => {
    await expect(dynamicPage.loadingElement).toBeDisplayed()
})

Then("validate dynamic element is disappearing", async () => {
    await dynamicPage.loadingElement.waitForDisplayed({timeout: 10000,reverse: true})
    await expect(dynamicPage.loadingElement).not.toBeDisplayed()
})

Then(/^I validate Hello Word Text$/,async () =>{
    await expect(dynamicPage.helloWordText).toHaveText("Hello world!")
})