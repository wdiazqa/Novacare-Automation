// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openCustomizeCookiesModal', () => {
  cy.get('#onetrust-pc-btn-handler').click();
  cy.get('#onetrust-pc-sdk', { timeout: 15000 }).should('exist').and('be.visible');
  cy.get('#onetrust-pc-sdk').should('have.css', 'opacity', '1');
});

Cypress.Commands.add('acceptanceCookies', () => {
  cy.get('#onetrust-group-container').should('be.visible');
  cy.get('#onetrust-button-group-parent').should('be.visible');
  cy.get('#onetrust-accept-btn-handler').click();
 
});

Cypress.Commands.add('clickSeeOurPrograms', () => {
  cy.get('.content-box-content > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
  cy.get('.content-box-content > .aem-Grid > .buttonComponent > .media__body > .btn').click();
  cy.url().should('include', '/diabetes/help-with-costs/help-with-insulin-costs.html');
 
});

Cypress.Commands.add('goMyInsulinRxForm', () => {
  cy.get('#onetrust-group-container').should('be.visible');
  cy.get('#onetrust-button-group-parent').should('be.visible');
  cy.get('#onetrust-accept-btn-handler').click();
  cy.get('.content-box-content > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
  cy.get('.content-box-content > .aem-Grid > .buttonComponent > .media__body > .btn').click();
  cy.url().should('include', '/diabetes/help-with-costs/help-with-insulin-costs.html');
  cy.get('.content-box-1753421560011 > .content-box-content > .aem-Grid > .buttonComponent > .media__body').click()
  cy.url().should('include', '/diabetes/help-with-costs/help-with-insulin-costs/myinsulinrx.html');
 
});