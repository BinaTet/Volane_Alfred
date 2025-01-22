import {

  enterEmailAddress,
  enterPassword,
  enterWrongPassword,
  clickSigninButton,
  verifyErrorIsDisplayed,
  verifyGitHubDashboard

} from '../pageLocators/githubLoginPage'

describe('Automated Login Github Process', () => {

  beforeEach(function (){
    cy.visit('/login')
  })

  it('Happy Path : Valid Login Credentials', () => {

    enterEmailAddress()
    enterPassword()
    clickSigninButton()
    verifyGitHubDashboard()

  })

  it('Failing Path : Invalid Login Credentials', () => {

    enterEmailAddress()
    enterWrongPassword()
    clickSigninButton()
    verifyErrorIsDisplayed()

  })

})