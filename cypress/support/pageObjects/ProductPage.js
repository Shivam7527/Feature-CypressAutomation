

import CartPage  from '../../support/pageObjects/CartPage'

class productPage{
pageValidation(){

cy.contains('Shop Name').should('be.visible');


}
getCardCount(){

  return  cy.get('.col-md-6');
    
}
selectProduct(productName){
    cy.get('app-card').filter(`:contains("${productName}")`).then($el => {

    cy.wrap($el).contains('button','Add').click();
})

}
selectFirstProduct(){
    cy.get('app-card').eq(0).contains('button','Add').click();



}
goToCart(){
    cy.contains('a','Checkout').click();
    return new CartPage();
}
}
export default productPage;