import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DashboardPage } from "@pages/dashboardPage";
import { Applicant } from "@locators/commonLocators";
import { TicketPage } from "@pages/ticketPage";

const dashboard = new DashboardPage();
const ticketPage = new TicketPage();

Given("I logged in with applicant", () => {
  dashboard.VisitUserDashboard(
    Applicant,
    "0081071523",
    "1367-02-25",
    "35221",
    "09125243681",
  );
});

Then("Applicant dashboard page should open completely", () => {
  dashboard.assertLocationVerified(Applicant);
});

When("I click on the new ticket registration button", () => {
  dashboard.OpenCreateTicket();
});
When("I Close Workflow Guide Modal", () => {
  dashboard.closeWorkflowGuideModal();
});
When("I choose {string} as the topic of the ticket", (topic: string) => {
  ticketPage.SetTopic(topic);
});
When("I select the ticket type {string}", (type: string) => {
  ticketPage.SetType(type);
});
When("I choose {string} ticket priority", (priority: string) => {
  ticketPage.SetPriority(priority);
});
When(/I enter "(.*)" in the message field/, (description: string) => {
  ticketPage.SetDescription(description);
});
When("I click submit button", () => {
  ticketPage.Submit();
});
Then("The system should display a success message", () => {
  ticketPage.AssertTicket();
});
