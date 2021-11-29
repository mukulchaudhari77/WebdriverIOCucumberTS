import { Given, Then, When } from "@wdio/cucumber-framework";
import myAccountPage from "../pageobjects/myAccount.Page";
import signInPage from "../pageobjects/signIn.page";
import signUpPage from "../pageobjects/siginUp.page";
import signup from "../testdata/signUp.json";
import randomData from "faker"
import womenPage from "../pageobjects/women.page";
import summaryPage from "../pageobjects/summary.page";
import addressPage from "../pageobjects/address.page";
import shippingPage from "../pageobjects/shipping.page";
import paymentPage from "../pageobjects/payment.page";

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
    await signUpPage.firstName.setValue(signup.firstName);
    await signUpPage.lastname.setValue(signup.lastName);
    await signUpPage.password.setValue(signup.password);
    await signUpPage.dobDay.selectByAttribute('value', signup.DOB.day);
    await signUpPage.dobMonth.selectByAttribute('value', signup.DOB.month);
    await signUpPage.dobYear.selectByAttribute('value', signup.DOB.year);
    await signUpPage.addressFirstName.setValue(signup.Address.addressFirstName);
    await signUpPage.addressLastName.setValue(signup.Address.addressLastName);
    await signUpPage.address.setValue(signup.Address.address);
    await signUpPage.city.setValue(signup.Address.city);
    await signUpPage.state.selectByAttribute('value', signup.Address.state);
    await signUpPage.zipCode.setValue(signup.Address.zipcode);
    await signUpPage.country.selectByVisibleText(signup.Address.country);
    await signUpPage.mobileNumber.setValue(signup.Address.mobileNumber);
    await signUpPage.aliasAddress.setValue(signup.Address.aliasAddress);

});

When(/^I click on the Register Button$/, async () => {
    await signUpPage.registerButton.click();
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




