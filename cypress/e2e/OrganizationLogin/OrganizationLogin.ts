import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AdminRole } from "@locators/commonLocators";
import { OrganizationloginPage } from "@pages/organizationloginPage";
import { DashboardPage } from "@pages/dashboardPage";

const login = new OrganizationloginPage();
const dashboard = new DashboardPage();

Given("I am in organization login page", () => {
  login.openLoginPage();
});

When(
  /I enter "(.*)" in the (username|password|captcha) field/,
  (value: string, field: string) => {
    login.enterInputField(value, field);
  },
);

// I wait 10 seconds for the captcha to enter
When("I wait {int} seconds for the captcha to enter", (timeout: number) => {
  login.waitForEnterCaptcha(timeout);
});

When("I click on login button", () => {
  login.clickOnLoginButton();
});

Then("I should logged in and redirected to dashboard page", () => {
  dashboard.assertLocationVerified(AdminRole);
});

Then("The appropriate message should be displayed in red", () => {
  login.assertIncorrectCredentialsMessageDisplayed();
});

Then("I should stay on the login page", () => {
  login.assertLocationVerified();
});
