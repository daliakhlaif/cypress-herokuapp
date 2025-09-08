describe("Herokuapp Checkboxes Tests", () => {
  
  beforeEach(() => {
    cy.visit("/checkboxes"); 
  });
  
  it("TC01: Should check the first checkbox", () => {
    cy.get("input[type='checkbox']").first().check().should("be.checked");
  });

  it("TC02: Should uncheck the second checkbox", () => {
    cy.get("input[type='checkbox']").eq(1).uncheck().should("not.be.checked");
  });

  it("TC03: Should check both checkboxes", () => {
    cy.get("input[type='checkbox']").each(($el) => {
      cy.wrap($el).check().should("be.checked");
    });
  });

  it("TC04: Should uncheck both checkboxes", () => {
    cy.get("input[type='checkbox']").each(($el) => {
      cy.wrap($el).uncheck().should("not.be.checked");
    });
  });

})