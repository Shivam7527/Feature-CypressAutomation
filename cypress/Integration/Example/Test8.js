describe('child window Handling',function(){

    it('child window test cases',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').then(function(e1){

const url=e1.prop('href');
cy.visit(url);
cy.origin(url, () => {

cy.get('#navbarSupportedContent a[href*="about"]').click();
//cy.get('.mt-50 h2').should('contain','QAClick Academy');
        })
        
    })
})
})