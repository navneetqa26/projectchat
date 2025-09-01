import LoginPage from '../Pages/LoginPages'
import profilepage from '../Pages/profile'
describe('Update profile', () => {
  const loginPage = new LoginPage()
  const newprofilepage = new profilepage()
  beforeEach(() => {
    cy.fixture('supportTicket').then((data) => {
      cy.visit('https://dev.projectchat.ai/auth/signin')
      loginPage.login(data.email, data.password)
      cy.contains('Welcome').should('be.visible');   
    })
    
  })
  it('Update profile changes and save', () => {
    cy.fixture('supportticket').then((data) => {
      cy.visit('https://dev.projectchat.ai/project-spaces')
      newprofilepage.createprofile()
    })
})
})
