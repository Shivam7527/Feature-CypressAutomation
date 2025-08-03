describe('My Fourth Test Suite',function(){

it('My Fourth Test cases',function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

cy.get('#alertbtn').click();
cy.get('input[id="confirmbtn"]').click();
cy.on('window:alert',(str)=> {

    //mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge');
})

//confirm
cy.on('window:confirm',(str)=> {

    //mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?');
})






})





})