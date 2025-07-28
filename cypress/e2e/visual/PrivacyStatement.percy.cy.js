import '@percy/cypress';

describe('Visual and Functional Vahgflidation of the Privacy Statement', () => {

  beforeEach(function () {

        cy.visit('https://novocare.prb.nnittest.com/');
        cy.fixture('privacyStatement').as('qaqc');
  });

  it('UI Text and Comvponent Visibhghility Valigfdation', function () {
ß
        cy.get('#onetrust-group-container').should('be.visible');
        cy.get('#onetrust-policy-text').should('have.text', this.qaqc.modalText);

        cy.get('#onetrust-button-group-parent').should('be.visible');
        cy.get('#onetrust-pc-btn-handler').should('be.visible');

        cy.get('#onetrust-reject-all-handler').should('be.visible')
        .and('have.text', this.qaqc.rejectAllButton);
        
        cy.get('#onetrust-accept-btn-handler').should('be.visible')
        .and('have.text', this.qaqc.acceptAllCookiesButton);

    
        cy.percySnapshot("fdfdfdsfdsf");


  });

   it('Validation of the vcReject Allgf functionality', function () {

        cy.get('#onetrust-group-container').should('be.visible');
        cy.get('#onetrust-button-group-parent').should('be.visible');
        
        cy.get('#onetrust-reject-all-handler').should('be.visible')
          .click();
        
        cy.get('#onetrust-group-container').should('not.be.visible');
        cy.get('#onetrust-button-group-parent').should('not.be.visible');

  });
  
  it('Validation of the Accept All Cookies functionality', function () {

        cy.get('#onetrust-group-container').should('be.visible');
        cy.get('#onetrust-button-group-parent').should('be.visible');
        
        cy.get('#onetrust-accept-btn-handler').should('be.visible')
          .click();
        
        cy.get('#onetrust-group-container').should('not.be.visible');
        cy.get('#onetrust-button-group-parent').should('not.be.visible');

        cy.percySnapshot("fdfdfdsfdsf");

  });


  it('Validates the Your Privavccy section inside Customize Cookies', function () {
        
        cy.openCustomizeCookiesModal();
       
        cy.get('.ot-abt-tab > .category-menu-switch-handler').should('be.visible')
          .and('have.text', this.qaqc.yourPrivacyTitle);    
        
        cy.get('#ot-pvcy-hdr').should('be.visible')
          .and('have.text', this.qaqc.yourPrivacyTitle);   
        
        cy.get('#ot-pc-desc').should('be.visible')
          .and('include.text', this.qaqc.yourPrivacyDescription);
    
        cy.get('.privacy-notice-link').should('be.visible')
          .and('include.text', this.qaqc.yourPrivacyLink);

        cy.get('.privacy-notice-link').should('have.attr', 'href', 'https://www.novonordisk-us.com/cookie-policy.html');
        cy.get('.privacy-notice-link').click();

  });


  it('Validates the Strictly Necessary Cookies section inside Customize Cookies', function () {

        cy.openCustomizeCookiesModal();
  
        cy.get('.ot-always-active-group > .category-menu-switch-handler').click();
        cy.get('.ot-always-active-group > .category-menu-switch-handler').should('be.visible')
          .and('have.text', this.qaqc.strictlyNecessaryCookiesTitle);

        cy.get('#ot-desc-id-C0001 > .ot-grp-hdr1 > .ot-cat-header').should('be.visible')
          .and('have.text', this.qaqc.strictlyNecessaryCookiesTitle);

        cy.get('#ot-desc-id-C0001 > .ot-grp-desc').should('be.visible')
          .and('include.text', this.qaqc.strictlyNecessaryCookiesDescription);

        cy.get('#ot-desc-id-C0001 > .ot-grp-hdr1 > .ot-tgl-cntr').should('be.visible')
          .and('have.text', this.qaqc.strictlyNecessaryCookiesStatus);



  });

   it('Validates the Functionality Cookies section inside Customize Cookies', function () {
   
        cy.openCustomizeCookiesModal();
  
        cy.get('[data-optanongroupid="C0003"] > .category-menu-switch-handler').click();
        cy.get('[data-optanongroupid="C0003"] > .category-menu-switch-handler').should('be.visible')
          .and('have.text', this.qaqc.functionalityCookiesTitle);

        cy.get('#ot-desc-id-C0003 > .ot-grp-desc').should('be.visible')
          .and('have.text', this.qaqc.functionalityCookiesDescription);

        cy.get('#ot-desc-id-C0003 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.functionalityCookiesStatus1);

        cy.get('#ot-desc-id-C0003 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click()

        cy.get('#ot-desc-id-C0003 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.functionalityCookiesStatus2);


   });

   it('Validates the Social Media Cookies section inside Customize Cookies', function () {

        cy.openCustomizeCookiesModal();
 
        cy.get('[data-optanongroupid="C0005"] > .category-menu-switch-handler').click();
        cy.get('[data-optanongroupid="C0005"] > .category-menu-switch-handler').should('be.visible')
          .and('have.text', this.qaqc.socialMediaCookiesTitle);
    
        cy.get('#ot-desc-id-C0005 > .ot-grp-hdr1 > .ot-cat-header').should('be.visible')
          .and('have.text', this.qaqc.socialMediaCookiesTitle);

        cy.get('#ot-desc-id-C0005 > .ot-grp-desc').should('be.visible')
          .and('include.text', this.qaqc.socialMediaCookiesDescription);

        cy.get('#ot-desc-id-C0005 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.socialMediaCookiesStatus1);

        cy.get('#ot-desc-id-C0005 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click();
        cy.get('#ot-desc-id-C0005 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.socialMediaCookiesStatus2);

  });

  it('Validates the Performance Cookies section inside Customize Cookies', function () {

        cy.openCustomizeCookiesModal();
  
        cy.get('[data-optanongroupid="C0002"] > .category-menu-switch-handler').click();
        cy.get('[data-optanongroupid="C0002"] > .category-menu-switch-handler').should('be.visible')
          .and('have.text', this.qaqc.performanceCookiesTitle);

        cy.get('#ot-desc-id-C0002 > .ot-grp-hdr1 > .ot-cat-header').should('be.visible')
          .and('have.text', this.qaqc.performanceCookiesTitle);

        cy.get('#ot-desc-id-C0002 > .ot-grp-desc').should('be.visible')
          .and('include.text', this.qaqc.performanceCookiesDescription);

        cy.get('#ot-desc-id-C0002 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.performanceCookiesStatus1);

        cy.get('#ot-desc-id-C0002 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click();
        cy.get('#ot-desc-id-C0002 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.performanceCookiesStatus2);

   });
   
    it('Validates the Advertising & Targetinytyg Cookies section inside Customize Cookies', function () {
       
        cy.openCustomizeCookiesModal();
  
        cy.get('[data-optanongroupid="C0004"] > .category-menu-switch-handler').click();
        cy.get('[data-optanongroupid="C0004"] > .category-menu-switch-handler').should('be.visible')
          .and('have.text', this.qaqc.advertisingCookiesTitle);
        
        cy.get('#ot-desc-id-C0004 > .ot-grp-hdr1 > .ot-cat-header').should('be.visible')
          .and('have.text', this.qaqc.advertisingCookiesTitle);

        cy.get('#ot-desc-id-C0004 > .ot-grp-desc').should('be.visible')
          .and('include.text', this.qaqc.advertisingCookiesDescription);

        cy.get('#ot-desc-id-C0004 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.advertisingCookiesStatus1);

        cy.get('#ot-desc-id-C0004 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click();
        cy.get('#ot-desc-id-C0004 > .ot-grp-hdr1 > .ot-tgl > .ot-label-status').should('be.visible')
          .and('have.text', this.qaqc.advertisingCookiesStatus2);

    });

    it('Acceptance of all customized cookie options', function () {

        cy.openCustomizeCookiesModal();
 
        cy.get('.ot-always-active-group > .category-menu-switch-handler').click();

        cy.get('[data-optanongroupid="C0003"] > .category-menu-switch-handler').click();
        cy.get('#ot-desc-id-C0003 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click();

        cy.get('[data-optanongroupid="C0005"] > .category-menu-switch-handler').click();
        cy.get('#ot-desc-id-C0005 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click();

        cy.get('[data-optanongroupid="C0002"] > .category-menu-switch-handler').click();
        cy.get('#ot-desc-id-C0002 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click();

        cy.get('[data-optanongroupid="C0004"] > .category-menu-switch-handler').click();
        cy.get('#ot-desc-id-C0004 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click();

        cy.get('.save-preference-btn-handler').should('be.visible')
        cy.get('.save-preference-btn-handler').click();
    
    });  


});
