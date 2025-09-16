const LOCATORS = {
  dropdown: "#dropdown",
  selectedOption: "#dropdown option:selected",
};

class DropdownPage {
  visit() {
    cy.visit("/dropdown");
  }

  isLoaded() {
    cy.get(LOCATORS.dropdown).should("be.visible");
  }

  getSelectedOption() {
    return cy.get(LOCATORS.selectedOption);
  }

  assertDefaultOption(expectedText: string) {
    cy.get(LOCATORS.dropdown).should("have.value", null);
    this.getSelectedOption().should("have.text", expectedText);
  }

  selectOption(optionText: string) {
    cy.get(LOCATORS.dropdown).select(optionText);
  }

  assertSelectedOption(optionText: string) {
    this.getSelectedOption().should("have.text", optionText);
  }
}

export default new DropdownPage();
