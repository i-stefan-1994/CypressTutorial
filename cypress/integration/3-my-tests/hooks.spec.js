/// <reference types="cypress" />

describe('Hooks test suite', () => {
   // it('Something', () => {
   //    cy.visit('/commands/actions');
   // })

   before(() => {
      cy.request('https://api.spacexdata.com/v3/missions')
         .its('body').should('have.length', 10);
   })

   afterEach(() => {
      cy.log('After each execute');
   })

   after(() => {
      cy.log('The final after hook runs once');
   })

   it('visits the homepage', () => {
      cy.visit('/')
   })

   it('has an h1 on the page', () => {
      cy.visit('/');
      cy.get('h1').should('exist');
   })

   it('renders the correct h1 text', () => {
      cy.get('h1').should('contain.text', "Kitchen Sink");
   })
})