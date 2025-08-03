// cypress/support/pageObjects/LoginPage.js
class LoginPage {
  visit() {
    cy.visit('https://rahulshettyacademy.com/client');
  }
  fillEmail(email) {
    cy.get('#userEmail').clear().type(email);
  }
  fillPassword(password) {
    cy.get('#userPassword').clear().type(password);
  }
  submit() {
    cy.get('#login').click();
  }
}
export default LoginPage;

// cypress/support/pageObjects/ProductPage.js
class ProductPage {
  addSecondProductToCart() {
    cy.get(':nth-child(2) > .card > .card-body > .w-10').click();
  }
  goToCart() {
    cy.get('.btn > label').click();
  }
}
export default ProductPage;

// cypress/support/pageObjects/CartPage.js
class CartPage {
  checkout() {
    cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
  }
  verifyCouponButton() {
    cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon');
  }
}
export default CartPage;

// cypress/support/pageObjects/CheckoutPage.js
class CheckoutPage {
  enterCountry(country) {
    cy.get('.form-group > .input').clear().type(country);
    cy.get('.ta-results > :nth-child(3)').click();
  }
  placeOrder() {
    cy.get('.btnn').click();
    cy.get('.hero-primary').click();
  }
  verifyOrderConfirmation() {
    cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ');
  }
}
export default CheckoutPage;

// cypress/support/pageObjects/OrdersPage.js
class OrdersPage {
  viewOrders() {
    cy.get(':nth-child(3) > .btn').click();
  }
  downloadInvoice() {
    cy.get(':nth-child(1) > :nth-child(6) > .btn').click();
  }
}
export default OrdersPage;

// cypress/Integration/Example/AI_Studio_Framework.js
import LoginPage from '../../support/pageObjects/LoginPage';
import ProductPage from '../../support/pageObjects/ProductPage';
import CartPage from '../../support/pageObjects/CartPage';
import CheckoutPage from '../../support/pageObjects/CheckoutPage';
import OrdersPage from '../../support/pageObjects/OrdersPage';

describe('AI_STUDIO FRAMEWORK TEST SUITE', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const ordersPage = new OrdersPage();

  it('ai_studio_framework_test', () => {
    loginPage.visit();
    loginPage.fillEmail('shiva7628@gmail.com');
    loginPage.fillPassword('Shivam7527@');
    loginPage.submit();

    productPage.addSecondProductToCart();
    productPage.goToCart();

    cartPage.checkout();
    cartPage.verifyCouponButton();

    checkoutPage.enterCountry('Ind');
    checkoutPage.placeOrder();
    checkoutPage.verifyOrderConfirmation();

    ordersPage.viewOrders();
    ordersPage.downloadInvoice();
  });
});
