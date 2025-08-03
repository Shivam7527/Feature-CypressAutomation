describe("Mouse Hover Test Suite", function () {
  it("Mouse Hover Test Cases", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Mouse hover on the first image
   // cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true}); 
    cy.url().should('include', 'top');
  });
})