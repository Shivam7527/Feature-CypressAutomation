
import ProductPage  from '../../support/pageObjects/ProductPage'
// import CartPage from './CartPage';
class HomePage {

    goTo(url){
        cy.visit(url);
    }

login(username,password){

 cy.get('#username').type(username);
cy.get('#password').type(password);
cy.contains('Sign In').click();
const productPage= new ProductPage();
return productPage;
}

}
export default HomePage;
