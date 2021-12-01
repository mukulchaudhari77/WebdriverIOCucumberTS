Feature: Demo of dynamic waits

    Scenario: Test wait for element to appear

        Given I am on dynamic loading page
        When I click on Start button
        Then I validate dynamic element is appearing
        And I validate dynamic element is disappearing
        And I validate Hello Word Text
