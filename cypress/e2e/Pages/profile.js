class profilepage{
    elements ={

       clickonprofilename:()=> cy.get("div[class='text-sm font-bold hidden md:flex text-[#0F2DC2] dark:text-[#9AA9F2]']"),
       clickonMyprofile:()=>cy.contains('My Profile'),
       clickonname:()=>cy.get(':nth-child(2) > .field-md2'),
       clickonsavechanges:()=>cy.contains('Save Changes').click(),
       verifychanges:()=>cy.contains('Profile updated successfully'),
       verifynewname:()=>cy.contains('NewUser')
    }

    createprofile(){
        this.elements.clickonprofilename().click();
        this.elements.clickonMyprofile().click();
        this.elements.clickonname().clear().type("NewUser");
        this.elements.clickonsavechanges();
        this.elements.verifychanges().should('be.visible');
        this.elements.verifynewname().should('be.visible');
    }


}
export default profilepage;