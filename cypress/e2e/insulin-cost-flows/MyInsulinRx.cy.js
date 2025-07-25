describe('Visual and Functional Validation of the MyInsulinRx Workflow', () => {
  
  beforeEach(function () {
    cy.visit('https://novocare.prb.nnittest.com/');
    cy.fixture('InsulinCostFlows').as('qaqc');
    
  });

   it('UI Text and Component Visibility Validation of the MyInsulinRx Component', function () {
      
    cy.acceptanceCookies();
    cy.clickSeeOurPrograms();
    
    cy.get('.content-box-1753421559978 > .content-box-content').should('be.visible');
    cy.get('#textid0cb5b05b-e43f-4c17-a87e-17217f36cd15 > p > strong').should('be.visible')
      .and('have.text', this.qaqc.eligibilityNote);

    cy.get('.content-box-1753421560011 > .content-box-content > .aem-Grid > .mediaobject > .media > .m-center').should('be.visible')
      .and('have.attr', 'src', '/content/dam/novonordisk/novocare/icons/MyInsulinRx_Icon_PINK.svg');
    
    cy.get('#textid5bf2b920-80a4-413c-98ee-3f08232353a5 > h5').should('be.visible')
      .and('have.text', this.qaqc.title);
 
   cy.get('.content-box-1753421560011 > .content-box-content > .aem-Grid > .buttonComponent > .media__body > .btn > .icon-text > strong').should('be.visible')
      .and('have.text', this.qaqc.buttonText);

    cy.get('.content-box-1753421560011 > .content-box-content > .aem-Grid > .buttonComponent > .media__body').click()
    cy.url().should('include', '/diabetes/help-with-costs/help-with-insulin-costs/myinsulinrx.html');


  });
  
  
  it('Validation of required fields', function () {
     cy.goMyInsulinRxForm();
     cy.get('#Next--475437889').click();

     cy.get('#registrationForm_firstname').should('have.value', '');
     cy.get(':nth-child(3) > .textfield-component > .form-grouped > .extra-custom-error-msg > .help-block').should('be.visible')
       .and('have.text', 'Please enter your first name.');
       
     cy.get('#registrationForm_lastname').should('have.value', '');
     cy.get(':nth-child(4) > .textfield-component > .form-grouped > .extra-custom-error-msg > .help-block').should('be.visible')
       .and('have.text', 'Please enter your last name.');
    
     cy.get('.statefield-component > .form-grouped > .extra-custom-error-msg > .help-block').should('be.visible')
       .and('have.text', 'Please select a state.');

     cy.get('.radiogroup-component > .form-grouped > .extra-custom-error-msg > .help-block').should('be.visible')
      .and('have.text', 'This is a required field.');

    cy.get(':nth-child(1) > .checkboxfield-component > .form-grouped > .checkbox > .extra-custom-error-msg > .help-block').should('be.visible')
      .and('have.text', 'To continue, please confirm.');

    cy.get(':nth-child(2) > .checkboxfield-component > .form-grouped > .checkbox > .extra-custom-error-msg > .help-block').should('be.visible')
      .and('have.text', 'To continue, please confirm.');


  });

  it('Validate a Main Workflow Form', function () {
      
    cy.goMyInsulinRxForm();
    cy.get('#registrationForm_firstname').type('Walter');
    cy.get('#registrationForm_lastname').type('Diaz');
    cy.get('#state').select('NY');
    cy.get('#commercial--283271029').check();
    cy.get(':nth-child(1) > .checkboxfield-component > .form-grouped > .checkbox > .chk-label > .pl-2 > p').click();
    cy.get(':nth-child(2) > .checkboxfield-component > .form-grouped > .checkbox > .chk-label > .pl-2 > p').click();
    cy.get('#Next--475437889').click();
    cy.url({ timeout: 10000 }).should('include', '/diabetes/help-with-costs/help-with-insulin-costs/myinsulinrx/result.html');
    cy.get('.scard-options-group > :nth-child(2)').click();

  });


});
