/// <reference types="cypress" />

describe('Patch Users API Test', () => {
    it('PATCH Users', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            headers: {
            'x-api-key': 'reqres-free-v1' 
            },
            body: {
                "job": "Manager"
            }
        })
        .then((response) => {
            // Status Code 201
            expect(response.status).to.eq(200)

            // Response Time 
            expect(response.duration).to.be.below(500)

            // Response Body String
            const job = response.body.job;
            expect(job).to.equal('Manager');

            // Response body has 'updatedAt' properties
            const data = response.body;
            expect(data).to.have.property('updatedAt');
        })
    })
})