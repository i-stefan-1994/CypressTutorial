/// <reference types="cypress" />

describe('Beginning demo tests', () => {
   it('should load the page', () => {
      cy.visit('https://example.cypress.io/commands/actions');
      cy.contains('Email address');
      cy.get('.form-group #email1').type('Test');
      cy.get('.form-group .form-control').eq(1).type('something', {force:true});
   })
})