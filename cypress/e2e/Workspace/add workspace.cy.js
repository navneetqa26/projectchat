import { textShouldbeVisible } from '../Helpers/helpers';
import { login } from '../Helpers/helpers';
describe('ProjectChat Workspace', () => {


   let workspaceData;

  beforeEach(() => {
    cy.fixture('workspace').then((data) => {
      workspaceData = data;
    });
  });

  // beforeEach(() => {
  //   // Runs before each test in the block 
  //   cy.viewport(1920, 1080); // Set viewport to 1920x1080
  //   cy.wait(1000); // Wait for 1 second to ensure the page loads completely
    
   beforeEach(() => {
     const vars=Cypress.env();
    login(vars.baseUrl, vars.email, vars.password);  
  })

  //   // Visit login page
    // cy.visit(); //
  //   // Fill in login form
  //   cy.get('input[placeholder="Enter Your Email"]').type(vars.email); // Replace with valid username
  //   cy.get('input[placeholder="Password"]').type(vars.password); // Replace with valid password
  //     // Click the sign-in button
  //   cy.get('button[type="submit"]').click();    
  //   // cy.contains('Welcome Tester !').should('be.visible');  
  //   textShouldbeVisible('Welcome Tester !'); 
  // });

   


  it('Adding project', () => {


    // Add project
    cy.get('button').contains('Add a Project Space').click();
    cy.get('.mb-6 > .text-2xl').should('be.visible').and('contain', 'Add a Workspace');
    // Enter a name
    const uniqueName = `${workspaceData.workspaceName}_${Date.now()}`;
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type(uniqueName, { parseSpecialCharSequences: false }); // Replace with unique name
    // Enter a description
    cy.get('.space-y-6 > :nth-child(2) > .w-full').type(workspaceData.workspaceDescription);
    
    // Click the create button
   cy.get('button[type="submit"]').contains('Add').click()

   //Verify that Workspace created successfully
   // cy.contains('Workspace created successfully').should('be.visible');
    textShouldbeVisible(workspaceData.workspacecreatedescription);
});

  it('Editing project', () => {

    cy.wait(2000); // Wait for 2 seconds to ensure the dashboard loads completely

    // Add project
    cy.get('button').contains('Add a Project Space').click();
    cy.get('.mb-6 > .text-2xl').should('be.visible').and('contain', 'Add a Workspace');
    // Enter a name
    const uniqueName = `${workspaceData.workspaceName}_${Date.now()}`;
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type(uniqueName, { parseSpecialCharSequences: false });    // Enter a description
    cy.get('.space-y-6 > :nth-child(2) > .w-full').type(workspaceData.workspaceDescription);
    
    // Click the create button
   cy.get('button[type="submit"]').contains('Add').click()

   //Verify that Workspace created successfully
    //cy.contains('Workspace created successfully').should('be.visible');
    textShouldbeVisible(workspaceData.workspacecreatedescription);
    cy.get('.space-x-4 > :nth-child(2) > .flex > .hidden').click()
    //Click on edit button
    cy.get('.absolute > :nth-child(2) > span').click()
    cy.get('.space-y-6 > :nth-child(1) > .w-full').clear().type('Updated Workspace Name'); // Replace with updated name
    cy.get('.space-y-6 > :nth-child(2) > .w-full').clear().type('This is an updated test workspace description.');
    // Click the update button  

    cy.get('button[type="submit"]').contains('Save Changes').click()
      //Verify that Workspace updated successfully
    //cy.contains('Project space updated successfully').should('be.visible');
    textShouldbeVisible(workspaceData.workspaceupdatedescription);
  
  });

  
  it('Deleting project', () => {


    // Add project
    cy.get('button').contains('Add a Project Space').click();
    cy.get('.mb-6 > .text-2xl').should('be.visible').and('contain', 'Add a Workspace');
    // Enter a name
     const uniqueName = `${workspaceData.workspaceName}_${Date.now()}`;
     cy.get('.space-y-6 > :nth-child(1) > .w-full').type(uniqueName, { parseSpecialCharSequences: false });    // Enter a description
    cy.get('.space-y-6 > :nth-child(2) > .w-full').type(workspaceData.workspaceDescription);
    
    // Click the create button
   cy.get('button[type="submit"]').contains('Add').click()

   //Verify that Workspace created successfully
    // cy.contains('Workspace created successfully').should('be.visible');
    textShouldbeVisible(workspaceData.workspacecreatedescription);
   // Click on the workspace to edit
    cy.get('.space-x-4 > :nth-child(2) > .flex > .hidden').click()
    //Click on delete button
   cy.get('[style="color: rgb(220, 38, 38);"]').click()  
    
      //Verify that Workspace deleted successfully
    // cy.contains('Workspace deleted successfully').should('be.visible');
    textShouldbeVisible(workspaceData.workspacedeletedescription);
  });


})