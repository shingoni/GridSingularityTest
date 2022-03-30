import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObject/HomePage";
import LoginPage from "../../support/pageObject/LoginPage";

const homePage = new HomePage()
const loginPage = new LoginPage()

    let TestData;
    before(function(){
        cy.fixture('Data').then(function(DataJson){
            TestData = DataJson
            return TestData
        })
    })
    Given('I open webpage for gridsingularity', () => {
        cy.visit(Cypress.env('url')+"/singularity-map");
    })

    And('I click on next and lets go button', () => {
        homePage.getNextButton().click()
        homePage.getNextButton().click()
        homePage.getLetsGoButton().click()
    });

    And('I click on Login Button', () => {
        homePage.getLoginButton().click()
    });

    // And ('I enter blank email and password', () => {
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter Invalid email format {string} and password as {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter Invalid email format {string} and password as {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter Invalid email format {string} and password as {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter Incorrect email {string} and password as {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter correct email {string} and password as {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter correct email {string} and 1 digit password password {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter correct email {string} and 8 digit password password {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter correct email {string} and Incorrect password password {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })
    // And ('I enter email as {string} and password as {string}', (email, password) => {
    //     loginPage.getEmailBox().clear()
    //     loginPage.getPasswordBox().clear()
    //     loginPage.getEmailBox().type(email)
    //     loginPage.getPasswordBox().type(password)
    //     loginPage.getLoginButton().click()
    // })

    And('I enter correct email {string} and correct password {string}', (email, password) => {
        loginPage.getEmailBox().clear()
        loginPage.getPasswordBox().clear()
        loginPage.getEmailBox().type(email)
        loginPage.getPasswordBox().type(password)
    });

    When('I login to the portal', function () {
        loginPage.getLoginButton().click()
    });

    Then('I do verification on dashboard page that user logged in or not', () => {
        loginPage.getProfileButton().click()
        loginPage.getUserName().should('have.text',TestData.name)
    });
