import alertsPage from "../../support/pages/alert-page";

describe("Herokuapp Alerts Tests", () => {

  beforeEach(() => {
    alertsPage.visit();
    alertsPage.isLoaded();
    cy.fixture("alerts").as("alerts"); 
  });

  it("TC01: Should accept JS Alert", () => {
    cy.get("@alerts").then((alerts: any) => {
      cy.on("window:alert", (text) => {
        expect(text).to.equal(alerts.jsAlert.buttonText);
      });
      alertsPage.clickAlert();
      alertsPage.assertResult(alerts.jsAlert.resultText);
    });
  });

  it("TC02: Should accept JS Confirm", () => {
   cy.fixture("alerts").then((alerts: any) => {
    cy.window().then((win) => {
      cy.stub(win, "confirm").callsFake((text) => {
        expect(text).to.eq(alerts.jsConfirm.buttonText);
        return true; 
      });
    });
    alertsPage.clickConfirm();
    alertsPage.assertResult(alerts.jsConfirm.okResult);
  });
  });

  it("TC03: Should cancel JS Confirm", () => {
    cy.get("@alerts").then((alerts: any) => {
      cy.on("window:confirm", (text) => {
        expect(text).to.equal(alerts.jsConfirm.buttonText);
        return false; 
      });
      alertsPage.clickConfirm();
      alertsPage.assertResult(alerts.jsConfirm.cancelResult);
    });
  });

  it("TC04: Should enter text in JS Prompt", () => {
    cy.get("@alerts").then((alerts: any) => {
      cy.window().then((win) => {
        cy.stub(win, "prompt").returns(alerts.jsPrompt.promptInput);
      });
      alertsPage.clickPrompt();
      alertsPage.assertResult(alerts.jsPrompt.enteredResult);
    });
  });

  it("TC05: Should cancel JS Prompt", () => {
    cy.get("@alerts").then((alerts: any) => {
      cy.window().then((win) => {
        cy.stub(win, "prompt").returns(null);
      });
      alertsPage.clickPrompt();
      alertsPage.assertResult(alerts.jsPrompt.cancelResult);
    });
  });

});
