describe('Automate Date Handling', function () {
    it('Date Handling Test Cases', function () {

        const monthNumber ="6"; //
        const date = "15"; // Desired date
        const year = "2027"; // Desired year
        const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthName = monthNames[parseInt(monthNumber, 10) - 1];
const expectedDate = [monthNumber,date,year];

        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        
    
        // Click on the datepicker
        cy.get('.react-date-picker__inputGroup').click();
        cy.get(' .react-calendar__navigation__label__labelText').as('cl')
        cy.get('@cl').click ();
          cy.get('@cl').click();
         
          cy.contains('button',year).click();
          cy.get('.react-calendar__tile').eq(Number(monthNumber -1)).click()
         // cy.contains('button',monthName).click();
          cy.contains('abbr', date).click();
          cy.get('.react-date-picker__inputGroup__input').each(($el,index )=> {
           cy.wrap($el).invoke('val').should('eq',expectedDate[index]);
            // Format the date as "dd/mm/yyyy"
           


          })


          })
            
            // Log the formatted date
          
          })
    
      