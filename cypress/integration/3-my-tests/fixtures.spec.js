/// <reference types="cypress" />

context('Fixtures test', () => {

   beforeEach(() => {
      cy.fixture('example').then(function(data){ //put fixture data into a variable
         this.data=data
         cy.log("THIS: ", this.data);
      })
   })

   it("Uses fixture data in a network request", function(){
      cy.visit('/commands/network-requests');
      cy.intercept('GET', '**/comments/*', this.data).as('getComment'); //way of mocking data
      cy.get('.network-btn').click();
      cy.wait('@getComment').then((res) => {
         cy.log('Response: ', res)
      })
   })

   it('Pulls data from a fixture', () => {
      cy.fixture('example').then((data) => {
         cy.log('DATA ' , data);
      })
   })

   it('Modifies fixture data inline', () => {
      cy.fixture('example').then((data) => {
         data.email = 'updated@email.com';
         cy.log('UPDATED: ', data)
      })
   })
})