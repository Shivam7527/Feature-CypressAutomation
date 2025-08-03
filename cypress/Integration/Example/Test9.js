import 'cypress-iframe';
describe('Cypress iframe handling', function () {
    it('iframe test cases', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        // Using jQuery to access the iframe
        cy.frameLoaded ('#courses-iframe');
        cy.iframe('#courses-iframe').find('a[href*="mentorship"]').eq(0).click();
        cy.wait(5000);
        
        cy.iframe('#courses-iframe').find('h1[class$="pricing-title text-white ls-1"]').should('have.length',2)
        

    });
    })