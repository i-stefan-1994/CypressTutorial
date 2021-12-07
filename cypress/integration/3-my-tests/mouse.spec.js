/// <reference types="cypress" />

context('Mouse tests', () => {
   beforeEach(() => {
      cy.visit('/commands/actions');
   })

   it('Triggers a popover on click', () => {
      cy.get('.action-btn').click();
      cy.findByText('This popover shows up on click').should('be.visible');
   })
   
   it('Can click on different sections on the canvas', () => {
      cy.get('#action-canvas').click('top');
      cy.get('#action-canvas').click('bottomRight');
      cy.get('#action-canvas').click(80,100);
   })

   it("Can double click to edit", () => {
      cy.get('.action-div').dblclick().should('not.be.visible');
      cy.get('.action-input-hidden').should('be.visible');
   })

   it('Can right click to edit', () => {
      cy.get('.rightclick-action-div').rightclick().should('not.be.visible');
      cy.get('.rightclick-action-input-hidden').should('be.visible');
   })
})