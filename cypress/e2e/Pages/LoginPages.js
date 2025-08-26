class LoginPage {
  elements = {
    emailInput: () => cy.get('input[placeholder="Enter Your Email"]'),
    passwordInput: () => cy.get('input[placeholder="Password"]'),
    loginButton: () => cy.get('button[type="submit"]')
  }

  login(email, password) {
    this.elements.emailInput().type(email)
    this.elements.passwordInput().type(password)
    this.elements.loginButton().click()
  }
}

export default LoginPage