const LOCATORS = {
  jsAlertBtn: "button[onclick='jsAlert()']",
  jsConfirmBtn: "button[onclick='jsConfirm()']",
  jsPromptBtn: "button[onclick='jsPrompt()']",
  resultText: "#result"
};

class AlertsPage {
  visit() {
    cy.visit("/javascript_alerts");
  }

  isLoaded() {
    cy.get(LOCATORS.jsAlertBtn).should("be.visible");
    cy.get(LOCATORS.jsConfirmBtn).should("be.visible");
    cy.get(LOCATORS.jsPromptBtn).should("be.visible");
  }

  clickAlert() {
    cy.get(LOCATORS.jsAlertBtn).click();
  }

  clickConfirm() {
    cy.get(LOCATORS.jsConfirmBtn).click();
  }

  clickPrompt() {
    cy.get(LOCATORS.jsPromptBtn).click();
  }

  assertResult(text: string) {
    cy.get(LOCATORS.resultText).should("contain.text", text);
  }
}

export default new AlertsPage();
