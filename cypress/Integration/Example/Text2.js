describe('My First Test Suite ',function(){

it('my Second Test case',function(){

    // test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
     cy.get('.search-keyword').type('ca');
     cy.wait(2000);
    
     // parent child chaining
      cy.get('.products').as('productlocator');
    // cy.get(':nth-child(2) > .product-action > button').click();
       //dyanmic click
       cy.get('@productlocator').find('.product').each(($el,index ,$list) => {
     const textveg=  $el.find('.product-name').text();
     if(textveg.includes('Cashews ')){
       cy.wrap($el).find('button').click()


     }

       })

   cy.get('.cart-icon > img').click();
  // cy.get('.cart-preview > .action-block > button').click();
  cy.contains('PROCEED TO CHECKOUT').click();
 cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();


})



})