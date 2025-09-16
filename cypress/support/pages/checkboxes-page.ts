const LOCATORS = {
  checkboxes: "input[type='checkbox']",
};

class CheckboxesPage {
  visit() {
    cy.visit("/checkboxes");
  }

  isLoaded() {
    cy.get(LOCATORS.checkboxes).should("exist");
  }

  getCheckbox(index: number) {
    return cy.get(LOCATORS.checkboxes).eq(index);
  }

  check(index: number) {
    this.getCheckbox(index).check().should("be.checked");
  }

  uncheck(index: number) {
    this.getCheckbox(index).uncheck().should("not.be.checked");
  }

  checkAll() {
    cy.get(LOCATORS.checkboxes).each(($el) => {
      cy.wrap($el).check().should("be.checked");
    });
  }

  uncheckAll() {
    cy.get(LOCATORS.checkboxes).each(($el) => {
      cy.wrap($el).uncheck().should("not.be.checked");
    });
  }
}

export default new CheckboxesPage();
