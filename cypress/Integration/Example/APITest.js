describe('API Test Suite', function () {

    it('Api Test Case', function () {

     cy.request('POST', 'https://api.restful-api.dev/objects', {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}).then(function (response) {
     cy.log(JSON.stringify(response.body)); 
  console.log(response.body) 
  expect(response.status).to.eq(200)
  // expect(response.body).to.have.property('Msg', 'successfully added')


});

    })
})

