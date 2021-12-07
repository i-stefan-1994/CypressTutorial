/// <reference types="cypress" />

const token = 'abcd123';
describe('Custom commands test suite', () => {
   it('Sets a token in local storage', () => {
      cy.setLocalStorage('token',token); 
   })

   it('Sets and gets a token from local storage', () => {
      cy.setLocalStorage('token', token); 
      cy.getLocalStorage('token').should('eq', token);
   })

   it('Overwrites the type command by using sensitive characters', () => {
      cy.visit('/commands/actions')
      cy.findAllByPlaceholderText('Email').type('test@email.com');
      cy.findAllByPlaceholderText('Email').type('test@email.com', {sensitive: true});
   })
})
