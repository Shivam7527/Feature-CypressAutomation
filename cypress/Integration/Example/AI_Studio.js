describe('AI_STUDIO TEST SUITE',()=>{



    it('ai_studio_test',()=>{
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('shiva7628@gmail.com');
        cy.get('#userPassword').clear('S');
        cy.get('#userPassword').type('Shivam7527@');
        cy.get('#login').click();
        cy.get(':nth-child(2) > .card > .card-body > .w-10').click();
        cy.get('.btn > label').click();
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
        cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon');
        cy.get('.form-group > .input').clear('I');
        cy.get('.form-group > .input').type('Ind');
        cy.get('.ta-results > :nth-child(3)').click();
        cy.get('.btnn').click();
        cy.get('.hero-primary').click();
        cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ');
        cy.get(':nth-child(3) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(6) > .btn').click();
        /* ==== End Cypress Studio ==== */
    })
} ) 