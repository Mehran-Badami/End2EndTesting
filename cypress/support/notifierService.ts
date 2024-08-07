import { type NotifierApi } from "@myTypes/notifierService";
export class NotifierService {
  GetOtp(recipient: string, timeout?: number): Cypress.Chainable<string> {
    cy.log("---------------- Get Message From Notifier -------------");
    const regex: RegExp = /رمز شما: (\d+)/;
    const username = "XXXXXXXX";
    const password = "XXXXXXXX";
    const base64AuthInfo = btoa(`${username}:${password}`);
    const url = `https://XXXXXXXX.com/api/?recipient=${recipient}`;

    return cy
      .request({
        method: "GET",
        url,
        headers: {
          Authorization: `Basic ${base64AuthInfo}`,
        },
        timeout,
      })
      .then(($response) => {
        expect($response.status).to.eq(200);
        const apiResponse: NotifierApi = $response.body;
        const firstMatch = apiResponse.results.find((sms) => {
          const smsText = sms.message_content.body;
          const match = smsText.match(regex);
          return match?.[1];
        });

        if (firstMatch === undefined) throw new Error("رمز یافت نشد");
        const firstMatchValue = firstMatch.message_content.body.match(regex);
        if (firstMatchValue === null || firstMatchValue.length < 2)
          throw new Error("رمز یافت نشد");
        expect(firstMatchValue[1]).not.to.be.empty;
        return firstMatchValue[1];
      });
  }
}
