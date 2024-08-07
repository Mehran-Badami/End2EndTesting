Feature: User Login feature
    Background: I am in user login page
        Given I am in user login page

    Scenario Outline: Verify valid login
        When I enter "<NationalCode>" in the national code field
        And I enter "<Birthday>" in the birthday field
        And I enter "<ShenasnamehCode>" in the shenasnameh code field
        And I enter "<Mobile>" in the mobile field
        And I enter "<Captcha>" in the captcha field
        And I click on the login button
        Then The OTP page should open
        When I let the system enter the received OTP for the mobile number "<Mobile>" in the OTP field
        And I click on the login button
        Then I should have a login cookie
        And I should logged in and redirected to dashboard page
        

    Examples:
      | NationalCode | Birthday    | ShenasnamehCode | Mobile       | Captcha
      | XXXXXXXX   | XXXXXXXX      | XXXXXXXX            | XXXXXXXX     | XXXXXXXX
      