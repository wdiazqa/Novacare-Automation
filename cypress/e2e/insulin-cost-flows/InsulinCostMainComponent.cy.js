describe('Visual and Functional Validation of the Main Insulin Cost Component', () => {
  
  beforeEach(function () {
    cy.visit('https://novocare.prb.nnittest.com/');
    cy.fixture('InsulinCostFlows').as('qaqc');
    
  });

  it('UI Text and Component Visibility Validation', function () {
      
    cy.acceptanceCookies();

    cy.get(':nth-child(3) > .simple-panel-container > .responsivegrid > .aem-Grid--tablet--12').should('be.visible');  
    cy.get(':nth-child(3) > .simple-panel-container > .responsivegrid > .aem-Grid--tablet--12 > .mediaobject > .media > img.m-center').should('be.visible')
       .and('have.attr', 'src', '/content/dam/novonordisk/novocare/icons/Help-with-insulin-costs-icon_2x.png');

    cy.get('#textidbbc7b0af-e145-4be2-affe-abfe8bb173e7 > h4').should('be.visible')
      .and('have.text', this.qaqc.headerText);

    cy.get('.content-box-content > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible');
    

    cy.get('.content-box-content > .aem-Grid > .buttonComponent > .media__body > .btn').click();
    cy.url().should('include', '/diabetes/help-with-costs/help-with-insulin-costs.html');



  });



   

});
