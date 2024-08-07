Feature: Admin dashboard feature
    Background: Background name
        Given I logged in with system administrator

    Scenario: Verify load page
        Then I should have a login cookie
        And Admin dashboard page should open completely

    # Scenario: Verify load page2
    #     Then I should have a login cookie
    #     And Admin dashboard page should open completely