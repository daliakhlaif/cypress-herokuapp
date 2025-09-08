describe("Herokuapp Login Tests", () => {
  
  beforeEach(() => {
    cy.visit("/login"); 
  });
  
  it("TC01: Should login with valid username and valid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });

  it("TC02: Should show error for invalid username and valid password", () => {
    cy.get("#username").type("tom");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });

  it("TC03: Should show error for valid username and invalid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your password is invalid!");
  });

  it("TC04: Should show error for invalid username and invalid password", () => {
    cy.get("#username").type("tom");
    cy.get("#password").type("SuperPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
  
  it("TC05: Should show error for invalid username and invalid password", () => {
    cy.get("#username").type("tom");
    cy.get("#password").type("SuperPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });

  it("TC06: Should show error for empty username and valid password", () => {
    cy.get("#username").clear();
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });

  it("TC07: Should show error for valid username and empty password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").clear();
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your password is invalid!");
  });

  it("TC08: Should show error when both fields are empty", () => {
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
  
  it("TC09: Should mask password input by default", function() {
        cy.get("input[name='password']")
            .should("have.attr", "type", "password");
    });

  it("TC10: Should fail login with incorrect case in username", () => {
    cy.get("#username").type("TomSmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });


})