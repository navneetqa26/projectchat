import LoginPage from '../Pages/LoginPages'
import SupportTicketPage from '../Pages/ticket'

describe('Support Ticket Creation', () => {
  const loginPage = new LoginPage()
  const ticketPage = new SupportTicketPage()
  beforeEach(() => {
    cy.fixture('supportTicket').then((data) => {
      cy.visit('https://dev.projectchat.ai/auth/signin')
      loginPage.login(data.email, data.password)
      cy.contains('Welcome Tester !').should('be.visible');   
    })
  })

  it('should create a support ticket successfully', () => {
    cy.fixture('supportticket').then((data) => {
      cy.visit('https://dev.projectchat.ai/project-spaces')
      ticketPage.createTicket(data.ticketTitle, data.ticketDescription, data.priority)
      ticketPage.elements.successToast().should('be.visible')
    })
  })
    it('should create and close a support ticket successfully', () => {
    cy.fixture('supportticket').then((data) => {
      cy.visit('https://dev.projectchat.ai/project-spaces')
      ticketPage.createTicket(data.ticketTitle, data.ticketDescription, data.priority)
      ticketPage.elements.successToast().should('be.visible')
    })
  })
})
