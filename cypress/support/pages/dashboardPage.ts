import * as DashboardLocators from "@locators/dashboardPageLocators";
import { UserLoginPage } from "@pages/userloginPage";
import { OrganizationloginPage } from "@pages/organizationloginPage";

const userlogin: UserLoginPage = new UserLoginPage();
const organizationlogin: OrganizationloginPage = new OrganizationloginPage();

export class DashboardPage {
  locationCompare(pathname: string, expectedPath: string): boolean {
    const slashRegex = /\//g;
    expectedPath = expectedPath.replace(slashRegex, "");
    const cleanedPathname = pathname.replace(slashRegex, ""); // حذف تمام "/"ها از مقدار دریافتی
    return cleanedPathname === expectedPath;
  }

  /**
   * این متد منتظر میماند تا صفحه کامل بارگزاری شود و سپس آدرس داشبود را با نقش شخص مطابقت میدهد
   * @param {string} role - نقش
   * @returns {Cypress.Chainable<string>} - خروجی سایپرس
   */
  assertLocationVerified(role: string): Cypress.Chainable<string> {
    return cy
      .document({ timeout: 10000 })
      .its("readyState")
      .should("eq", "complete")
      .location("pathname")
      .should("include", `${DashboardLocators.Path}/${role}`);
  }

  closeWorkflowGuideModal(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(DashboardLocators.ModalHeaderCloseSelector).click();
  }

  OpenCreateTicket(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(DashboardLocators.TicketCreateelector)
      .should("have.attr", "target", "_blank")
      .invoke("removeAttr", "target")
      .click();
  }

  VisitUserDashboard(
    role: string,
    nationalCode: string,
    birthday: string,
    shenasnamehCode: string,
    mobile: string,
  ): Cypress.Chainable<Cypress.AUTWindow> {
    return cy
      .session(role, () => {
        userlogin.Login(nationalCode, birthday, shenasnamehCode, mobile);
      })
      .then(() => cy.visit(`${DashboardLocators.Path}/${role}`));
  }

  VisitAdminDashboard(
    role: string,
    username: string,
    password: string,
  ): Cypress.Chainable<Cypress.AUTWindow> {
    return cy
      .session(role, () => {
        organizationlogin.Login(username, password);
      })
      .then(() => cy.visit(`${DashboardLocators.Path}/${role}`));
  }
}
