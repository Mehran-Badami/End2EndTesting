import * as OtpPageLocators from "@locators/otpPageLocators";
import { NotifierService } from "../notifierService";

const notifierService = new NotifierService();

export class OtpPage {
  assertLocationVerified(): Cypress.Chainable<string> {
    return cy
      .document({ timeout: 10000 })
      .its("readyState")
      .should("eq", "complete")
      .location("pathname")
      .should("include", OtpPageLocators.Path);
  }

  fillOtp(value: string): Cypress.Chainable<string> {
    return notifierService.GetOtp(value).then((result: string) => {
      cy.get(OtpPageLocators.OTP_INPUT).type(result);
    });
  }

  clickOnLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(OtpPageLocators.LOGIN_BUTTON).click();
  }
}
