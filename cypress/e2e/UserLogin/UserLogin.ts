import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { GetFildSelector } from "@locators/userLoginPageLocators";
import { Applicant } from "@locators/commonLocators";
import { OtpPage } from "@pages/otpPage";
import { UserLoginPage } from "@pages/userloginPage";
import { DashboardPage } from "@pages/dashboardPage";

const login = new UserLoginPage();
const otpPage = new OtpPage();
const dashboard = new DashboardPage();

Given("I am in user login page", () => {
  login.openLoginPage();
});

When(
  /I enter "(.*)" in the (national.code|birthday|shenasnameh.code|mobile|captcha) field/,
  (value: string, fieldName: string) => {
    login.enterInputField(value, GetFildSelector(fieldName));
  },
);

When("I click on the login button", () => {
  login.clickOnLoginButton();
});

Then("The OTP page should open", () => {
  otpPage.assertLocationVerified();
});

When(
  /I let the system enter the received OTP for the mobile number "(.*)" in the OTP field/,
  (value: string) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(50).then(() => {
      otpPage.fillOtp(value);
    });
  },
);

Then("I should logged in and redirected to dashboard page", () => {
  dashboard.assertLocationVerified(Applicant);
});
