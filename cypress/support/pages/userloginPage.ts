import * as UserLoginPageLocators from "@locators/userLoginPageLocators";
import { CookieManagement } from "../cookieManagement";
import { OtpPage } from "@pages/otpPage";

const otpPage: OtpPage = new OtpPage();
const cookieManagement: CookieManagement = new CookieManagement();
export class UserLoginPage {
  openLoginPage(): Cypress.Chainable<string> {
    return cy
      .visit(UserLoginPageLocators.Path)
      .document({ timeout: 10000 })
      .its("readyState")
      .should("eq", "complete")
      .location("pathname")
      .should("include", UserLoginPageLocators.Path);
  }

  enterInputField(
    value: string,
    field: string,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    // eslint-disable-next-line cypress/no-force
    return cy.get(field).type(value, { force: true });
  }

  clickOnLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(UserLoginPageLocators.LoginButton).click();
  }

  assertIncorrectCredentialsMessageDisplayed(): Cypress.Chainable<
    JQuery<HTMLElement>
  > {
    return cy
      .get("#alert")
      .should("be.visible")
      .and("have.css", "color")
      .and("eq", "rgb(114, 28, 36)");
  }

  assertLocationVerified(): Cypress.Chainable<string> {
    return cy
      .document({ timeout: 10000 })
      .its("readyState")
      .should("eq", "complete")
      .location("pathname")
      .should("include", UserLoginPageLocators.Path);
  }

  Login(
    nationalCode: string,
    birthday: string,
    shenasnamehCode: string,
    mobile: string,
  ): void {
    this.openLoginPage();
    this.enterInputField(nationalCode, UserLoginPageLocators.NationalCodeInput);
    this.enterInputField(birthday, UserLoginPageLocators.BirthdayInput);
    this.enterInputField(
      shenasnamehCode,
      UserLoginPageLocators.ShenasnamehCodeInput,
    );
    this.enterInputField(mobile, UserLoginPageLocators.MobileInput);
    this.enterInputField("123", UserLoginPageLocators.CaptchaInput);
    this.clickOnLoginButton();
    otpPage.assertLocationVerified();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000).then(() => {
      otpPage.fillOtp(mobile);
      this.clickOnLoginButton();
      cookieManagement.assertLoginCookieExistence(true);
      cy.wait(1000);
    });
  }
}
