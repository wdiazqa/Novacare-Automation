describe('Visual and Functional Validation of the Savings and Insurance Support', () => {
  
  beforeEach(function () {
    cy.visit('https://novocare.prb.nnittest.com/');
    cy.fixture('SavingsInsuranceSupport').as('qaqc');
    
  });

  it('UI Text and Component Visibility Validation', function () {

    cy.acceptanceCookies();

    cy.get(':nth-child(1) > .\\33 0').should('be.visible');

    cy.get(':nth-child(1) > .\\33 0 > :nth-child(1) > :nth-child(1) > .mediaobject > .media > img.m-center')
      .should('be.visible')
      .and('have.attr', 'src', '/content/dam/diabetes-patient/novocare/redesign/Icons/Savings-badge-icon_LG_2x.png');

    cy.get(':nth-child(1) > .\\33 0 > :nth-child(1) > :nth-child(1) > .mediaobject > .media > .media-body > .theme_mobile_center > .h5')
      .should('be.visible')
      .and('have.text', this.qaqc.headerTitle);

    cy.get('#textid86a4121b-a8ba-4698-ab31-c514079a3e4b > p')
      .should('be.visible')
      .and('have.text', this.qaqc.subHeaderText);

    cy.get('#textid75f66526-8038-4c6e-a0db-ed475643ee2a > p > strong')
      .should('be.visible')
      .and('have.text', this.qaqc.dropdownLabel);

    cy.get('#conditionSelect')
      .find('option:selected')
      .should('have.text', 'Select');

    cy.get('[data-name="btn-disabled"] > .aem-Grid > .buttonComponent > .media__body')
      .should('be.visible')
      .and('contain.text', this.qaqc.nextButtonText);
  });

  it('Selects each therapeutic area and validates button visibility', function () {

    cy.acceptanceCookies();
    
    const therapeuticOptions = [
      { value: 'diabetes', dataName: 'btn-diabetes' },
      { value: 'obesity', dataName: 'btn-obesity' },
      { value: 'mash', dataName: 'btn-mash' },
      { value: 'growth', dataName: 'btn-growth' },
      { value: 'hemophilia', dataName: 'btn-hemophilia' },
      { value: 'ph1', dataName: 'btn-ph1' },
      { value: 'womans-health', dataName: 'btn-womans-health' }
    ];

    therapeuticOptions.forEach(({ value, dataName }) => {
      cy.get('#conditionSelect').select(value);

      cy.get(`[data-name="${dataName}"] .btn`).should('be.visible');

      cy.get('.aem-Grid--phone--12 .dropdown .input-grouped .input-grouped-addon')
        .should('be.visible');

      cy.get('#conditionSelect').select('Select');
    });
  });

});
