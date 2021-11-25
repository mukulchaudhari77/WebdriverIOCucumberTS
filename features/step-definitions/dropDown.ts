import { Given, Then, When } from "@wdio/cucumber-framework";

// Given(/^I am on the Landing page of herokuapp$/, async () => {
//     await browser.url("http://the-internet.herokuapp.com/");
// });
When(/^I click on the dropdown$/, async () => {
    await $("//a[text()='Dropdown']").click();
});
Then(/^I should be navigated and I see the Header \"([^\"]*)\"$/, async (dropdownlist) => {
    const HeaderText1 = $('//h3');
    await expect(HeaderText1).toBeClickable(dropdownlist);
});
When(/^I click on that please select an option$/, async () => {
    await $('//*[@id="dropdown"]').click();
});
Then(/^I can see are options \"([^\"]*)\"$/, async (pleaseselectanoption) => {
    const message = $('//*[@id="dropdown"]/option[1]');
    await expect(message).toHaveText(pleaseselectanoption);
});
When(/^I click the options of Option 1$/, async () => {
    await $('//*[@id="dropdown"]/option[2]').click();
});
Then(/^I see the options are \"([^\"]*)\" is selected$/, async (option1) => {
    const input = await $('//*[@id="dropdown"]');
    expect(input).toBeSelected(option1)
});
When(/^I click on the please select an option$/, async () => {
    await $('//*[@id="dropdown"]').click();
});
When(/^I click the options of Option 2$/, async () => {
    await $('//*[@id="dropdown"]/option[3]').click();
});
Then(/^I see options \"([^\"]*)\" is selected$/, async (option2) => {
    const input1 = await $('//*[@id="dropdown"]');
    expect(input1).toBeSelected(option2)
});