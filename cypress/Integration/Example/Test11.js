describe('End to End ecommerce TestSuite', function () {
//run once before all tests in the block
    before(function (){
         cy.fixture('example').then(function (data) {
            this.data =data

        })
    })
    it('Submit Order', function () {

       const productName =this.data.productName;
       

cy.visit(Cypress.env('url') +"/loginpagePractise/#") ;

cy.get('#username').type(this.data.username);
cy.get('#password').type(this.data.password);
cy.contains('Sign In').click();
cy.contains('Shop Name').should('be.visible');
cy.get('.col-md-6').should('have.length', 4);
cy.get('app-card').filter(`:contains("${productName}")`).then($el => {
    cy.wait(2000);
    cy.wrap($el).contains('button','Add').click();
})
cy.get('app-card').eq(0).contains('button','Add').click();
cy.contains('a','Checkout').click();
let sum =0;
cy.get('tr td:nth-child(4) strong').each($el => {

 const amount=  Number( $el.text().split(' ')[1].trim());
  sum+=amount;
 


}).then(function(){

     expect(sum).to.lessThan(200000);


})

cy.contains('button','Checkout').click();
cy.get('#country').type('India');
//cy.config('defaultCommandTimeout', 10000);
cy.wait(2000);
cy.get('.suggestions ul li a').click();
cy.get('.btn-success').click();

cy.get('.alert-success').should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')


   









    })
        
})
