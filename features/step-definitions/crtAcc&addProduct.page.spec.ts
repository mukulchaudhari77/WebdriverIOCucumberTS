import { Given, Then, When } from "@wdio/cucumber-framework";
import myAccountPage from "../pageobjects/signup/myAccount.page";
import signInPage from "../pageobjects/signIn.page";
import signUpPage from "../pageobjects/signup/siginUp.page";
import signup from "../testdata/signUp.json";
import randomData from "faker";
import womenPage from "../pageobjects/menu/women.page";
import summaryPage from "../pageobjects/cart/cartsummary.page";
import addressPage from "../pageobjects/cart/address.page";
import shippingPage from "../pageobjects/cart/shipping.page";
import paymentPage from "../pageobjects/cart/payment.page";
import orderPage from "../pageobjects/cart/order.page";
import siginUpPage from "../pageobjects/signup/siginUp.page";
Given(/^This is the Home Page of MyStore$/, async () => {
    await signInPage.homePageLink()
});
When(/^I Click on Sign in$/, async () => {
    await signInPage.clickOnSIgnIn.click();
});
Then(/^I should see the Text as \"([^\"]*)\"$/, async (createanaccount) => {
    await expect(signInPage.createAccountText).toHaveText(createanaccount);
});
When(/^I enter email address it should create account$/, async () => {
    await signInPage.enteringEmailAddress.setValue(randomData.internet.email())
});
When(/^I click on create an account button$/, async () => {
    await signInPage.ClickOnCreateAccountButton.click();
});
Then(/^I should navigate and see the heading as \"([^\"]*)\"$/, async (yourpersonalinformation) => {
    await expect(signUpPage.pageHeading).toHaveText(yourpersonalinformation);
});
When(/^I enter the data in all fields as$/, async () => {
    
    await signUpPage.radioButton.isSelected();
    await signUpPage.setFirstAndLastName(signup.name);
    await signUpPage.password.setValue(randomData.internet.password(8));
    await signUpPage.selectDateOfBirth(signup.dob)
    await siginUpPage.setAddress(signup.address)
});
When(/^I click on the Register Button$/, async () => {
    await signUpPage.clickregisterbutton()
});
Then(/^I should be navigated to another page and can see the text as \"([^\"]*)\"$/, async (myaccount) => {
    await expect(myAccountPage.myAccountText).toHaveText(myaccount);
});
When(/^I click the women section button$/, async () => {
    await womenPage.womenbutton.click();
});
Then(/^it should navigate to the women section page i see \"([^\"]*)\"$/, async (women) => {
    await expect(womenPage.womenvalidate).toHaveText(women);
});
When(/^I perform some actions in women section page$/, async () => {
    await womenPage.hover.scrollIntoView();
    await womenPage.clkaddtocartbtn.click();
});
Then(/^I should validate the path of message \"([^\"]*)\"$/, async (productsuccessfullyaddedtoyourshoppingcart) => {
    await expect(womenPage.addtocartmsg).toHaveText(productsuccessfullyaddedtoyourshoppingcart);
});
When(/^I click on proceed to checkout button$/, async () => {
    await womenPage.checkout.click();
});
Then(/^it should show title heading \"([^\"]*)\"$/, async (shoppingcartsummary) => {
    await expect(summaryPage.heading).toHaveTextContaining(shoppingcartsummary);
});
When(/^I click on proceed to checkout in the summary page$/, async () => {
    await summaryPage.chkout.click();
});
Then(/^I navigate and validate to the address page and I see \"([^\"]*)\"$/, async (addresses) => {
    await expect(addressPage.heading).toHaveText(addresses);
});
When(/^I will click on proceed button$/, async () => {
    await addressPage.proceed.click();
});
Then(/^I will validate the navigated shipping page \"([^\"]*)\"$/, async (shipping) => {
    await expect(shippingPage.shippingHeading).toHaveText(shipping);
});
When(/^I perform action select check box and click on proceed to checkout button$/, async () => {
    await shippingPage.checkbox.click();
    await shippingPage.shippingCheckout.click();
});
Then(/^I will get navigate and validate to payment page \"([^\"]*)\"$/, async (pleasechooseyourpaymentmethod) => {
    await expect(paymentPage.paymentHeading).toHaveText(pleasechooseyourpaymentmethod);
});
When(/^I click on payment option$/, async () => {
    await paymentPage.paymentOption.click();
});
Then(/^I see the Message \"([^\"]*)\"$/, async (ordersummary) => {
    await expect(orderPage.orderSummary).toHaveText(ordersummary);
});
When(/^I click I confirm my order$/, async () => {
    await orderPage.confrimOrder.click();
});
Then(/^I navigate and validate the order confirmation page \"([^\"]*)\"$/, async (orderconfirmation) => {
    await expect(orderPage.ConfirmationMsg).toHaveText(orderconfirmation);
});