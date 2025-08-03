
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";

const homePage= new HomePage()
Given('I am on Ecommerce Page', () => {

    homePage.goTo('https://rahulshettyacademy.com/loginpagePractise/#');


})
When('I login to the application', function()  {
    this.productPage = homePage.login(this.data.username, this.data.password);

   this.productPage.pageValidation();
   this .productPage.getCardCount().should('have.length', 4);


})
When('I login to the application portal', function(DataTable)  {
    this.productPage = homePage.login( DataTable.rawTable[1][0], DataTable.rawTable[1][1]);

   this.productPage.pageValidation();
   this .productPage.getCardCount().should('have.length', 4);


})

When('I add itemms to cart and checkout', function() {
    this.productPage.selectProduct(this.data.productName);

    this.productPage.selectFirstProduct();

    this.cartPage = this.productPage.goToCart();


})
When('Validate the total price limit', function()  {

    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.lessThan(200000);
    })


})
Then ('select the country submit and verify Thankyou', function()  {
    const confirmationPage= this.cartPage.checkoutItems();
confirmationPage.submitFormDetails();
confirmationPage.getAlertMessage().should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');



})