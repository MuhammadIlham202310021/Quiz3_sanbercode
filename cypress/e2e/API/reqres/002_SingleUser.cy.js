/// <reference types="cypress" />

describe('Single User API Test', () => {
    it('GET Single User', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            headers: {
            'x-api-key': 'reqres-free-v1' 
            }
        })
        .then((response) => {
            // Status Code 200
            expect(response.status).to.eq(200)

            // Response Time 
            expect(response.duration).to.be.below(500)

            // Response Body String
            const firstName = response.body.data.first_name;
            expect(firstName).to.equal('Janet');
        })
    })
})