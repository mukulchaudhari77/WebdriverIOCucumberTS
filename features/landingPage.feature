Feature: Landing page of internet herokuapp

    Scenario: Validate checkbox

        Given I am on the Landing page of herokuapp
        Then I should see a header text "Welcome to the-internet"
        When I click on chechbox menu
        Then  I should be navigated to checkbox page
        Then I validate checkbox2 is selected
        Then I validate checkbox1 is selected