describe("Herokuapp Dropdown Tests", () => {

  beforeEach(() => {
    cy.visit("/dropdown"); 
  });

  it("TC01: Should have the default option selected on page load", () => {
    cy.get("#dropdown").should("have.value", null);
    cy.get("#dropdown option:selected").should("have.text", "Please select an option");
  });

  it("TC02: Should select the first option", () => {
    cy.get("#dropdown").select("Option 1");
    cy.get("#dropdown option:selected").should("have.text", "Option 1");
  });

  it("TC03: Should select the second option", () => {
    cy.get("#dropdown").select("Option 2");
    cy.get("#dropdown option:selected").should("have.text", "Option 2");
  });
});