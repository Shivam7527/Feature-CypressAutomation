// cypress/Integration/Example/Test6.test.js

describe('Test6.js logic', () => {
    beforeEach(() => {
        // Visit the actual page or mock the DOM if needed
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('should find the price for Python course and assert it is 25', () => {
        // Correct selector: iterate over table rows, not the whole table
        cy.get('.table-display tr').each(($row) => {
            cy.wrap($row).find('td').eq(0).then(($cell) => {
                const courseName = $cell.text();
                if (courseName.includes('Python')) {
                    cy.wrap($row).find('td').eq(1).then(($priceCell) => {
                        const price = $priceCell.text();
                        expect(price).to.equal('25');
                    });
                }
            });
        });
    });

    it('should not match the whole table text to 25', () => {
        // This test demonstrates the error in the original code
        cy.get('.table-display').each(($el) => {
            const text = $el.text();
            if (text.includes('Python')) {
                cy.wrap($el).find('td:nth-child(2)').then(($price) => {
                    const price = $price.text();
                    // This will fail as in your error
                    expect(price).to.equal('25');
                });
            }
        });
    });
});// cypress/Integration/Example/Test6.test.js

describe('Web Table Handling - Test6.js', function () {
    it('should find the price for Python course and assert it is 25', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.table-display tr').each(($row) => {
            // Get the first column text (course name)
            cy.wrap($row).find('td').eq(0).then(($cell) => {
                const courseName = $cell.text();
                if (courseName.includes('Python')) {
                    // Get the price from the second column
                    cy.wrap($row).find('td').eq(1).then(($priceCell) => {
                        const price = $priceCell.text();
                        expect(price).to.equal('25');
                    });
                }
            });
        });
    });
});