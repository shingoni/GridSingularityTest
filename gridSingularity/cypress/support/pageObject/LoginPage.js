class LoginPage {
    getEmailBox(){
        return cy.get('input[name = email]')
    }

    getPasswordBox(){
        return cy.get('input[name = password]')
    }

    getLoginButton(){
        return cy.get('button[type = submit]')
    }

    getProfileButton(){
        return cy.get('.UserAvatar_profileBtn__SUVMr',{timeout:20000})
    }

    getUserName(){
        return cy.get('.UserAvatar_username__ZcamA')
    }
}

export default LoginPage