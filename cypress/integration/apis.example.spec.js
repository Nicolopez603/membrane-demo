describe('Validating the response Using API', function () {
    it('Validating HTTP status code 200 on response', function () {
          cy.fixture('api_response.json')
        .then(apiResponse =>{
        cy.request('POST', 'https://api-staging.membrane.trade/v2/login',
        { email: 'nicomlopez3@gmail.com', password: "asd1!!" }).then(
         (response) => {
        expect(response.status).to.deep.equal(apiResponse.statusCode);
});
})
})
    it('Validating "statusCode:401" on response body', function () {
    cy.fixture('api_response.json')
    .then(apiResponse =>{
    cy.request('POST', 'https://api-staging.membrane.trade/v2/login',
    { email: 'nicomlopez3@gmail.com', password: "asd1!!" }).then(
    (response) => {
    expect(response.body.statusCode).to.deep.equal(apiResponse.body.statusCode);
    cy.log(apiResponse);
});
})
})
    it('Validating "code":401 error message', function () {
    cy.fixture('api_response.json')
    .then(apiResponse =>{
    cy.request('POST', 'https://api-staging.membrane.trade/v2/login',
    { email: 'nicomlopez3@gmail.com', password: "asd1!!" }).then(
     (response) => {
    expect(response.body.error.code).to.deep.equal(apiResponse.body.error.code);

});
})
})
    it('body response should match', () => {
    cy.fixture('api_response.json')
    .then(apiResponse =>{
    cy.request('POST', 'https://api-staging.membrane.trade/v2/login',
    { email: 'nicomlopez3@gmail.com', password: "asd1!!" }).then(
    (response) => {
    expect(response.body).to.deep.equal(apiResponse.body);

})
});
})
})
