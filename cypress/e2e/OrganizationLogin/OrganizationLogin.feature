Feature: Login feature
    Background: I am in organization login page
        Given I am in organization login page

    Scenario Outline: Verify valid login
        When I enter "<username>" in the username field
        And I enter "<password>" in the password field
        And I enter "<captcha>" in the captcha field
        And I click on login button
        Then I should have a login cookie
        And I should logged in and redirected to dashboard page

    Examples:
      | username | password    | captcha |
      | admin    | admin       | 123     |


 Scenario Outline: Verify invalid login
        When I enter "<username>" in the username field
        And I enter "<password>" in the password field
        And I enter "<captcha>" in the captcha field
        And I click on login button
        Then I should not have a login cookie
        And The appropriate message should be displayed in red
        And I should stay on the login page

    Examples:
      | username | password    | captcha |
      | Admin    | XXXXXXXX    | 123     |
      