    
describe('Add a collaborator', () => {


   let workspaceData;

  beforeEach(() => {
    cy.fixture('workspace').then((data) => {
      workspaceData = data;
    });
  });

  beforeEach(() => {
    // Runs before each test in the block 
    cy.viewport(1920, 1080); // Set viewport to 1920x1080
    cy.wait(1000); // Wait for 1 second to ensure the page loads completely
    
    const vars=Cypress.env();
    console.log(vars)
    

    // Visit login page
    cy.visit(vars.baseUrl); //
    // Fill in login form
    cy.get('input[placeholder="Enter Your Email"]').type(vars.email); // Replace with valid username
    cy.get('input[placeholder="Password"]').type(vars.password); // Replace with valid password
      // Click the sign-in button
    cy.get('button[type="submit"]').click();    
    cy.contains('Welcome Tester !').should('be.visible');   
    cy.wait(2000); // Wait for 2 seconds to ensure the dashboard loads completely
  });

   


  it('Adding a Collaborator', () => {

    // Add project
    cy.get('button').contains('Add a Project Space').click();
    cy.get('.mb-6 > .text-2xl').should('be.visible').and('contain', 'Add a Workspace');
    // Enter a name
    const uniqueName = `${workspaceData.workspaceName}_${Date.now()}`;
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type(uniqueName, { parseSpecialCharSequences: false });    // Enter a description
        // Enter a description
    cy.get('.space-y-6 > :nth-child(2) > .w-full').type(workspaceData.workspaceDescription);
    
    // Click the create button
   cy.get('button[type="submit"]').contains('Add').click()

   //Verify that Workspace created successfully
    cy.contains('Workspace created successfully').should('be.visible');

    //Click on collaborators icon
    cy.get('.hidden > :nth-child(6)').click();
    cy.get('.text-2xl').should('be.visible').and('contain', 'Collaborators');

    //Click on Add Collaborator button
    cy.get('button').contains('Add Collaborator').click();
    //Enter email
    cy.get('#email').type(workspaceData.newemail);
    //Click on Send Invite button       
    cy.get('button[type="submit"]').contains('Add Collaborator').click();
    //Verify that Collaborator added successfully
    cy.contains('Collaborator added successfully').should('be.visible');


})

it('Removing a Collaborator', () => {

    // Add project
    cy.get('button').contains('Add a Project Space').click();
    cy.get('.mb-6 > .text-2xl').should('be.visible').and('contain', 'Add a Workspace');
    // Enter a name
    const uniqueName = `${workspaceData.workspaceName}_${Date.now()}`;
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type(uniqueName, { parseSpecialCharSequences: false });    // Enter a description
        // Enter a description
    cy.get('.space-y-6 > :nth-child(2) > .w-full').type(workspaceData.workspaceDescription);
    
    // Click the create button
   cy.get('button[type="submit"]').contains('Add').click()

   //Verify that Workspace created successfully
    cy.contains('Workspace created successfully').should('be.visible');

    //Click on collaborators icon
    cy.get('.hidden > :nth-child(6)').click();
    cy.get('.text-2xl').should('be.visible').and('contain', 'Collaborators');

    //Click on Add Collaborator button
    cy.get('button').contains('Add Collaborator').click();
    //Enter email
    cy.get('#email').type(workspaceData.newemail);
    //Click on Send Invite button       
    cy.get('button[type="submit"]').contains('Add Collaborator').click();
    //Verify that Collaborator added successfully
    cy.contains('Collaborator added successfully').should('be.visible');
    //Remove Collaborator invitation
    cy.get('.text-red-600').click(); 
    //Verify that Collaborator invitation removed successfully
    cy.contains('Pending Collaborator invitation removed successfully').should('be.visible');


})


})