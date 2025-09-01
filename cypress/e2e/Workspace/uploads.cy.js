
describe('File Uploads', () => {


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
    cy.contains('Welcome').should('be.visible');   
        cy.wait(2000); // Wait for 2 seconds to ensure the dashboard loads completely

  });

  it('Create a folder and upload a file', () => {
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
    cy.contains('Workspace created successfully').should('be.visible');

    //Click on workspace
    // cy.contains("Projects").click();
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
  })

   it('Create a folder and upload a file and delete file', () => {
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
    cy.contains('Workspace created successfully').should('be.visible');
    cy.wait(2000); // Wait for 2 seconds to ensure the dashboard loads completely

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
    const fileName = ['GanttData (2).xlsx'];
    // Ensure this file is in the cypress/fixtures directory
    cy.get('input[type="file"]').attachFile(fileName);
    
    // Verify the file upload success message or the presence of the file in the list
    cy.contains('GanttData (2).xlsx').should('be.visible');
    //Click on upload filesbutton
    cy.get('button.bg-\\[\\#0F2DC2\\]').should('be.visible').click();


    //Verify file uploaded successfully
    cy.contains('Files uploaded successfully!').should('be.visible');
    // Delete the uploaded file
    cy.get(':nth-child(2) > .col-span-2 > .relative > .checkbox-input').click();
    // Click on delete button
    cy.get('button').contains('Delete').click();
   // Verify toast message
   cy.contains('Successfully deleted 1 files and 0 folders').should('be.visible');

   
})
 it('Create a folder and upload two file and delete 2 files', () => {
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
    cy.contains('Workspace created successfully').should('be.visible');

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
    const fileName = ['GanttData (2).xlsx', 'Vehicle_claims (1).docx'];
    // Ensure this file is in the cypress/fixtures directory
    cy.get('input[type="file"]').attachFile(fileName);
    
    // Verify the file upload success message or the presence of the file in the list
    cy.contains('GanttData (2).xlsx').should('be.visible');
    cy.contains('Vehicle_claims (1).docx').should('be.visible');
    //Click on upload filesbutton
    cy.get('button.bg-\\[\\#0F2DC2\\]').should('be.visible').click();


    //Verify file uploaded successfully
    cy.contains('Files uploaded successfully!').should('be.visible');
    // Delete the uploaded file
   cy.get(':nth-child(1) > .col-span-2 > .relative > .checkbox-input').click();
    // Click on delete button
    cy.get('button').contains('Delete').click();
   // Verify toast message
   cy.contains('Successfully deleted 2 files and 0 folders').should('be.visible');

   
})

  it('Create a folder and upload a file and delete file through menu Delete Option', () => {
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
    cy.contains('Workspace created successfully').should('be.visible');

    //Click on workspace
    cy.contains("Projects").click();
    // CLick on uploads
    cy.contains("Uploads").click();
    // Verify No files message
    cy.contains('No Uploads Yet').should('be.visible');
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
    //Click on Delete option
    cy.get('.file-tooltip-text-red').click();
    //Verify delete 
   cy.contains('File Deleted Successfully').should('be.visible');
  })



   it('Create a folder and upload a file and search file throgh filter', () => {
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
    cy.contains('Workspace created successfully').should('be.visible');

    //Click on workspace
    cy.contains("Projects").click();
    // CLick on uploads
    cy.contains("Uploads").click();
    // Verify No files message
    cy.contains('No Uploads Yet').should('be.visible');
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

    //click on filter icon
    cy.contains("Filter").click();
    // Type file name in search box
   cy.get('.flex-rwcb > .flex > .w-full').type(fileName);
    // Verify the file is visible in the list
    cy.get(':nth-child(2) > .col-span-2').should('be.visible').and('contain', 'GanttData (2).xlsx');

  })



})