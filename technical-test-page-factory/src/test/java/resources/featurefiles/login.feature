Feature: Verify Error message for Login page.
  As a user, I want to verify that the error message appears and is displayed correctly with invalid credentials.

  Scenario Outline: User should receive appropriate error message with invalid credentials.
    Given I am on homepage
    When I click on login link
    And I enter invalid "<name>" into Username/email field
    And I enter invalid "<password>" into password field
    And I click on login button
    Then I should not login successfully with appropriate "<error>" message.
    Examples:
      | name   | password     | error                                                                     |
      | test05 | testpassword | Please try again, your username/email or password has not been recognised |
      |        |              | Both your username and password are required                              |
      | ab     | testpassword | Your username/email must be 4 to 60 characters long                       |











