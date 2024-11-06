const email = Cypress.env('githubEmail')
const password = Cypress.env('githubPassword')

export const locator = {

    EMAIL_FIELD: 'input[id="login_field"]',
    PASSWORD_FIELD: 'input[id="password"]',
    SIGNIN_BUTTON: 'input[name="commit"]',
    ERROR_ALERT: 'div.flash.flash-full.flash-error',
    HOME_HEADER: 'h2'

}

export const enterEmailAddress = () => {
    cy.get(locator.EMAIL_FIELD)
        .should('be.visible')
        .and('be.empty')
        .type(email)
}

export const enterPassword = () => {
    cy.get(locator.PASSWORD_FIELD)
        .should('be.visible')
        .and('be.empty')
        .type(password)
}

export const enterWrongPassword = () => {
    cy.get(locator.PASSWORD_FIELD)
        .should('be.visible')
        .and('be.empty')
        .type('Welcome123#')
}



export const clickSigninButton = () => {
    cy.contains(locator.SIGNIN_BUTTON, 'Sign in')
        .should('be.visible')
        .and('be.enabled')
        .click()
}

export const verifyGitHubDashboard = () => {
    cy.contains(locator.HOME_HEADER, 'Home')
        .should('be.visible')
}


export const verifyErrorIsDisplayed = () => {
    cy.contains(locator.ERROR_ALERT, 'Incorrect username or password.')
    .should('be.visible')
    .get(locator.PASSWORD_FIELD)
    .should('be.empty')
}



