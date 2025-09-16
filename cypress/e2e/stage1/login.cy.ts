import loginPage from "../../support/pages/login-page";

describe("Herokuapp Login Tests", () => {
  
  beforeEach(() => {
    loginPage.visit();
    loginPage.isLoaded();
    cy.fixture('users').as('users');
    cy.fixture('messages').as('messages');
  });
  
  it("TC01: Should login with valid username and valid password", () => {
    cy.get('@users').then((user: any)=>{
       cy.login(user.valid.name, user.valid.password)
       cy.url().should('include', '/secure')
    })
  });

  it("TC02: Should show error for invalid username and valid password", () => {
    cy.get('@users').then((user: any)=>{
       cy.login(user.invalid.name, user.valid.password)
    })
    cy.get('@messages').then((message: any) =>{
       loginPage.assertErrorMsg(message.invalidUsername)
    })
  });

  it("TC03: Should show error for valid username and invalid password", () => {
    cy.get('@users').then((user: any)=>{
       cy.login(user.valid.name, user.invalid.password)
    })
    cy.get('@messages').then((message: any) =>{
       loginPage.assertErrorMsg(message.invalidPassword)
    })
  });

  it("TC04: Should show error for invalid username and invalid password", () => {
    cy.get('@users').then((user: any)=>{
       cy.login(user.invalid.name, user.invalid.password)
    })
    cy.get('@messages').then((message: any) =>{
       loginPage.assertErrorMsg(message.invalidUsername)
    })
  });
  

  it("TC05: Should show error for empty username and valid password", () => {
    loginPage.clearUsername();
    cy.get('@users').then((user: any)=>{
      loginPage.typePassword(user.valid.password)
    })
    loginPage.clickSubmit()

    cy.get('@messages').then((message: any) =>{
       loginPage.assertErrorMsg(message.invalidUsername)
    })
  });

  it("TC06: Should show error for valid username and empty password", () => {
    loginPage.clearPassword();
    cy.get('@users').then((user: any)=>{
      loginPage.typeUsername(user.valid.name)
    })
    loginPage.clickSubmit()

    cy.get('@messages').then((message: any) =>{
       loginPage.assertErrorMsg(message.invalidPassword)
    })
  });

  it("TC07: Should show error when both fields are empty", () => {
    loginPage.clearUsername();
    loginPage.clearPassword();
    loginPage.clickSubmit()
    cy.get('@messages').then((message: any) =>{
       loginPage.assertErrorMsg(message.invalidUsername)
    })
  });
  
  it("TC08: Should mask password input by default", function() {
        loginPage.passwordShouldBeMasked()
    });

  it("TC09: Should fail login with incorrect case in username", () => {
  cy.get('@users').then((user: any)=>{
    cy.login("TomSmith", user.valid.password); 
  });

  cy.get('@messages').then((message: any) =>{
    loginPage.assertErrorMsg(message.invalidUsername);
  });
});


})