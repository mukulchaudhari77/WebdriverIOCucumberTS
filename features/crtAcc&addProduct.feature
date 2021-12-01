Feature: This is for Creating Account and adding the Product Items to Cart

    Scenario: Creating a Account using Personal Information

        Given This is the Home Page of MyStore
        When I Click on Sign in
        Then I should see the Text as "CREATE AN ACCOUNT"
        When I enter email address it should create account
        When I click on create an account button
        Then I should navigate and see the heading as "YOUR PERSONAL INFORMATION"
        When I enter the data in all fields as
        When I click on the Register Button
        Then I should be navigated to another page and can see the text as "MY ACCOUNT"


    Scenario: Adding the Product to the cart and continue for Shipping

        When I click the women section button
        Then it should navigate to the women section page i see "WOMEN"
        When I perform some actions in women section page
        Then I should validate the path of message "Product successfully added to your shopping cart"
        When I click on proceed to checkout button
        Then it should show title heading "SHOPPING-CART SUMMARY"
        When I click on proceed to checkout in the summary page
        Then I navigate and validate to the address page and I see "ADDRESSES"
        When I will click on proceed button
        Then I will validate the navigated shipping page "SHIPPING"
        When I perform action select check box and click on proceed to checkout button
        Then I will get navigate and validate to payment page "PLEASE CHOOSE YOUR PAYMENT METHOD"
        When I click on payment option
        Then I see the Message "ORDER SUMMARY"
        When I click I confirm my order
        Then I navigate and validate the order confirmation page "ORDER CONFIRMATION"

