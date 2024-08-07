import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { AdminRole } from "@locators/commonLocators";
import { CookieManagement } from "../cookieManagement";
import { DashboardPage } from "@pages/dashboardPage";

const cookieManagement = new CookieManagement();
const dashboard = new DashboardPage();

Given("I logged in with system administrator", () => {
  dashboard.VisitAdminDashboard(AdminRole, "admin", "R@y@n1399");
});

Then(/I should (not )*have a login cookie/, (isCheck: string) => {
  cookieManagement.assertLoginCookieExistence(isCheck !== "not ");
});

When("I click submit Form", () => {
  cy.get("input[type=submit]").click();
});
