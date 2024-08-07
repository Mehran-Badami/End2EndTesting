import { loginCookieName } from "@locators/commonLocators";
export class CookieManagement {
  assertLoginCookieExistence(
    cookieExistenceExpected: boolean,
  ): Cypress.Chainable<Cypress.Cookie | null> {
    return cy
      .getCookie(loginCookieName)
      .should(cookieExistenceExpected ? "exist" : "not.exist");
  }
}
