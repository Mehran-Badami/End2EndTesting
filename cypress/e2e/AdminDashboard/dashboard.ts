import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { DashboardPage } from "@pages/dashboardPage";
import { AdminRole } from "@locators/commonLocators";

const dashboard = new DashboardPage();

Then("Admin dashboard page should open completely", () => {
  dashboard.assertLocationVerified(AdminRole);
});
