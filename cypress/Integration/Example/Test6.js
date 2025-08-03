describe('Web Table  Handling',function(){


    it('web table test cases',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 
  cy.get('tr td:nth-last-child(2)').each(($el, index, $rows) => {

  const textweb=  $el.text();
  if(textweb.includes('Python')) {
    cy.get('tr td:nth-last-child(2)').eq(index).next().then(function(price){

      const priceText= price.text();
      expect(priceText).to.equal('25');
      //console.log(priceText);
      //cy.log(priceText);
      //cy.log(textweb);
  })
}

})    
 

 
    



    })
})