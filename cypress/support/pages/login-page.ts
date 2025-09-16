const LOCATORS = {
  username : "#username",
  password : "#password",
  submitBtn : "button[type='submit']",
  errorMsg : "#flash",
}

class LoginPage{
    visit(){
        cy.visit('/login')
    }

    isLoaded(){
        cy.get(LOCATORS.username).should('be.visible')
    }
    
    typeUsername(value: string){
        cy.get(LOCATORS.username).type(value)
    }

    typePassword(value: string){
        cy.get(LOCATORS.password).type(value)
    }

    clearUsername(){
        cy.get(LOCATORS.username).clear()
    }

    clearPassword(){
        cy.get(LOCATORS.password).clear()
    }

    clickSubmit(){
        cy.get(LOCATORS.submitBtn).click()
    }

    passwordShouldBeMasked(){
        cy.get(LOCATORS.password).should('have.attr','type', 'password')
    }

    assertErrorMsg(msg: string){
       cy.get(LOCATORS.errorMsg).should('contain', msg)
    }

}

export default new LoginPage()