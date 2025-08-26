describe('Move files to folder', () => {


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
  });

  it('File Moves to new folder', () => {
    // Add project
    cy.get('button').contains('Add a Project Space').click();
    cy.get('.mb-6 > .text-2xl').should('be.visible').and('contain', 'Add a Workspace');
    // Enter a name
    const uniqueName = `${workspaceData.workspaceName}_${Date.now()}`;
    cy.get('.space-y-6 > :nth-child(1) > .w-full').type(uniqueName);
    cy.get('.space-y-6 > :nth-child(2) > .w-full').type(workspaceData.workspaceDescription);
    
    // Click the create button
   cy.get('button[type="submit"]').contains('Add').click()

   //Verify that Workspace created successfully
    cy.contains(workspaceData.workspacecreatedescription).should('be.visible');

    //Click on workspace
    cy.contains("Projects").click();
    // CLick on uploads
    cy.contains("Uploads").click();
    //Click on new folder button
    cy.get('button').contains('New Folder').click();
    cy.get('.flex-grow').type(workspaceData.foldername);
    //Click on create button
   cy.get("button[class='bg-[#0F2DC2] dark:bg-[#9AA9F2] text-white dark:text-[#000] px-4 py-2 rounded-lg font-bold disabled:opacity-60']").click();
    //Verify folder created successfully
    cy.contains('Folder created successfully').should('be.visible');
    // Click on folder
    cy.contains('TestFolder').click();
    // Click on Upload File button
    cy.get('button').contains('Upload File').click();

        //Upload a file 
    const fileName = 'GanttData (2).xlsx'; // Ensure this file is in the cypress/fixtures directory
    cy.get('input[type="file"]').attachFile(fileName);
    
    // Verify the file upload success message or the presence of the file in the list
    cy.contains('GanttData (2).xlsx').should('be.visible');

    //Click on upload filesbutton
     cy.get('button.bg-\\[\\#0F2DC2\\]').should('be.visible').click();


    //Verify file uploaded successfully
    cy.contains('Files uploaded successfully!').should('be.visible');
    //Click on menu icon in actioncolumn
    cy.get('.file-button-wrapper-new').click();
    //Click on Move to folder option
    cy.get('.file-tooltip-wrapper > :nth-child(3)').click();
    //See add to folder model
    cy.get('.border-gray-200 > .text-xl').contains('Add to folder').should('be.visible');
    cy.get('.flex-rc > .border').type(workspaceData.newfoldername);
    cy.get('.light-blue-btn').click();
    cy.contains('Folder created successfully').should('be.visible');
    //Click on folder
    cy.contains('UpdatedTestFolder').click();
    //Click on move files button
    cy.get('.mt-12 > .primary-btn').click();
    cy.contains('Files moved to folder successfully').should('be.visible');

    //Click on back button
    cy.contains('Back').click();
    cy.contains(workspaceData.newfoldername).should('be.visible').click();
    cy.contains('GanttData (2).xlsx').should('be.visible');
  })



})