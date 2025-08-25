// cypress/pages/LoginPage.js

class LoginPage {
  
  // Locators
  emailField() {
    return cy.get('input[placeholder="Enter Your Email"]'); 
  }

  passwordField() {
    return cy.get('input[placeholder="Password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }


  // Actions
  visit() {
    cy.visit(Cypress.env('baseUrl') + '/login');
  }

  enterEmail(email) {
    this.emailField().type(email);
  }

  enterPassword(password) {
    this.passwordField().type(password);
  }

  clickLogin() {
    this.loginButton().click();
  }

  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}

module.exports = new LoginPage();
