import * as TicketLocator from "@locators/ticketLocators";

export class TicketPage {
  SetTopic(topic: string): Cypress.Chainable<JQuery<any>> {
    // eslint-disable-next-line cypress/no-force
    return cy.get(TicketLocator.TopicSelector).select(topic, { force: true });
  }

  SetType(type: string): Cypress.Chainable<JQuery<HTMLElement>> {
    // eslint-disable-next-line cypress/no-force
    return cy.get(TicketLocator.TypeSelector).select(type, { force: true });
  }

  SetPriority(priority: string): Cypress.Chainable<JQuery<any>> {
    // eslint-disable-next-line cypress/no-force
    return cy
      .get(TicketLocator.PrioritySelector)
      .select(priority, { force: true });
  }

  SetDescription(description: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(TicketLocator.DescriptionSelector).type(description);
  }

  Submit(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("input[type=submit]").click();
  }

  AssertTicket(): Cypress.Chainable<string> {
    return cy
      .get(TicketLocator.AlertMsgSuccess)
      .should("not.be.empty")
      .invoke("text")
      .then((text) => {
        const numericPart = text.replace(/\D/g, ""); // Extract numeric part
        expect(numericPart).to.match(/^\d+$/); // Check if it's a number
      });
  }
}
