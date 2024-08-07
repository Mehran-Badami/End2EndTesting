import {
  CaptchaInput,
  Path,
  LoginButton,
  GetInputSelector,
  UserNameInputName,
  PasswordInputName,
  CaptchaInputName,
} from "@locators/organizationLoginPageLocators";

export class OrganizationloginPage {
  openLoginPage(): Cypress.Chainable<string> {
    return cy
      .visit(Path)
      .document({ timeout: 10000 })
      .its("readyState")
      .should("eq", "complete")
      .location("pathname")
      .should("include", "/dashboard/login");
  }

  enterInputField(
    value: string,
    field: string,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(GetInputSelector(field)).type(value);
  }

  waitForEnterCaptcha(timeout: number): void {
    cy.get(CaptchaInput).focus();
    cy.get(CaptchaInput, { timeout: timeout * 1000 }).should("not.be.focused");
  }

  clickOnLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(LoginButton).click();
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
      .should("include", Path);
  }

  Login(username: string, password: string): void {
    this.openLoginPage();
    this.enterInputField(username, UserNameInputName);
    this.enterInputField(password, PasswordInputName);
    this.enterInputField("123", CaptchaInputName);
    this.clickOnLoginButton();
  }
}
