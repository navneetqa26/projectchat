describe('ProjectChat Login', () => {
  it('logs in with valid credentials', () => {

      const vars=Cypress.env();
      console.log(vars)

    // Visit login page
    cy.visit(vars.baseUrl); //
    cy.wait(2000); // Wait for the page to load
    // Fill in login form
    cy.get('input[placeholder="Enter Your Email"]').type(vars.email); // Replace with valid username
    cy.get('input[placeholder="Password"]').type(vars.password); // Replace with valid password
   // Verify the login API URL
   var loginapiurl= "https://api2.projectchat.ai/AI_Engine/login";
   var loginapialias= "loginapi";
     cy.intercept('POST', loginapiurl).as(loginapialias);

     //verify the login request and send invalid 401 response
         // cy.intercept('POST', loginapiurl,{ 

    //   statusCode: 401,
    //  }).as(loginapialias);

    // Click the sign-in button
    cy.get('button[type="submit"]').click();    
    cy.wait("@" + loginapialias,{ timeout: 10000 }).its("response.statusCode").should("eq", 200);
    cy.contains('Welcome Tester !').should('be.visible');   
    
    });
})
