class HomePage {
    getNextButton(){
        return cy.contains('Next')
    }

    getLetsGoButton(){
        return cy.contains("Let")
    }

    getLoginButton(){
        return cy.contains('Login')
    }
}
export default HomePage