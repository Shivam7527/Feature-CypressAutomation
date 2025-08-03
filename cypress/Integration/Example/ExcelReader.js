const neatCSV= require('neat-csv');
let productName;
let invoiceNumber;
describe('Session Test Suite', function () {
  it('Session Test Case', async() => {
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {
      userEmail: "shiva7628@gmail.com",
      userPassword: "Shivam7527@"
    }).then((response) => {
      expect(response.status).to.eq(200);
      const token = response.body.token;
      cy.visit('https://rahulshettyacademy.com/client/', {
        onBeforeLoad: (window) => {
          window.localStorage.setItem('token', token);
        }
      });
    });
cy.get('.card-body b').eq(1).then(function(element){
productName= element.text();

})
    cy.get('.card-body button:last-of-type').eq(1).click();

    cy.get('.btn.btn-custom[routerlink="/dashboard/cart"]').click();
   cy.wait(2000);
    cy.contains('Checkout').click();
   cy.get(' input[placeholder="Select Country"]').type('ind');
     cy.get('.ta-results button').each(($e1, index, $list) => {



      if($e1.text()===" India")

      {

          cy.wrap($e1).click()

      }

  })
    cy.get('.action__submit').click();

    cy.get('label[class="ng-star-inserted"]').then(function(el){

      invoiceNumber = el.text();
      invoiceNumber = invoiceNumber.split(' ')[2].trim();
      cy.log(invoiceNumber);
      
    }
  
  )
    cy.wait(2000)
    cy.get('.btn-primary').click();
   

      



    

    

  
  });
});