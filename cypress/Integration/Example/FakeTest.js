describe('Moke API Test Suite ', function(){

    it('Fake API Test', function() {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        

        cy.intercept({

            method: 'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        
        {
           statusCode: 200, 
           body:[{
               "book_name": "RestAssured with Java",
               "isbn": "DSR",
               "aisle": "2304"
           }]
        }).as('bookretrieval');

        cy.get('.btn-primary').click();
        cy.wait('@bookretrieval').then(({request,response}) => {
         cy.get('tr').should('have.length' ,response.body.length +1 );
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available'); 





    }


)

})