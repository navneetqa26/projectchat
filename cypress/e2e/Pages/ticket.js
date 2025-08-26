class SupportTicketPage {
  elements = {
    Clickonsupportticket:()=>cy.get(':nth-child(4) > .cursor-pointer > .flex > .text-sm'),
    Suuportticketvisible:()=>cy.contains('Support Tickets'),
    createTicketButton: () => cy.contains('Create Ticket'),
    Createsupportticketvisible:()=>cy.contains('Create Support Ticket'),
    titleInput: () =>cy.get('.space-y-6 > :nth-child(1) > .w-full'),

    attachfile:()=>cy.get('input[type="file"]'),

    descriptionInput: () => cy.get(':nth-child(4) > .w-full'),
    submitButton: () => cy.contains('Submit Ticket').click(),
    successToast: () => cy.contains('Ticket created successfully'),
    // Backtoticket:()=> cy.contains('Back to Tickets').click()
    clickonticket:()=>cy.get(':nth-child(1) > .flex-1 > .flex > .text-xl'),
    clickoncloseticket:()=>cy.get('.mt-2'),
    ticketclosed:()=>cy.contains('Ticket closed successfully')
  }

  createTicket(title, description, priority) {
    this.elements.Clickonsupportticket().click()
    this.elements.Suuportticketvisible().should('be.visible')
    this.elements.createTicketButton().click()
    this.elements.Createsupportticketvisible().should('be.visible')
    this.elements.titleInput().type(title + " " + Date.now()) // unique name
    this.elements.attachfile().attachFile("GanttData (2).xlsx")
    this.elements.descriptionInput().type(description)
    this.elements.submitButton()
    this.elements.successToast().should('be.visible')
    // this.elements.Backtoticket()
    this.elements.clickonticket().click()
    this.elements.clickoncloseticket().click()
    this.elements.ticketclosed().should('be.visible')
  }
}

export default SupportTicketPage
