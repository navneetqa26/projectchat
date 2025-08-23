export function textShouldbeVisible (text) {  
    cy.contains(text).should('be.visible');

}
export function login (baseUrl, email, password) {  
    cy.visit(baseUrl); //
    // Fill in login form
    cy.get('input[placeholder="Enter Your Email"]').type(email); // Replace with valid username
    cy.get('input[placeholder="Password"]').type(password); // Replace with valid password
      // Click the sign-in button
    cy.get('button[type="submit"]').click();    
    // cy.contains('Welcome Tester !').should('be.visible');  
    textShouldbeVisible('Welcome Tester !'); 
  
}
