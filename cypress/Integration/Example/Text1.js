describe('My First Test Suite ',function(){

it('my firsttest case',function(){

    // test step
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
     cy.get('.search-keyword').type('ca');
     cy.wait(2000);
     cy.get('.product:visible').should('have.length',4);
     // parent child chaining
      cy.get('.products').as('productlocator');
      cy.get('@productlocator').find('.product').should('have.length',4);
    // cy.get(':nth-child(2) > .product-action > button').click();
       cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click();
       //dyanmic click
       cy.get('@productlocator').find('.product').each(($el,index ,$list) => {
     const textveg=  $el.find('.product-name').text();
     if(textveg.includes('Cashews ')){
       cy.wrap($el).find('button').click()

     }
       })
       cy.get('.brand').should('have.text','GREENKART');
cy.get('.brand').then(function(logo){
    cy.log(logo.text());
    console.log('sf')

})


})



})