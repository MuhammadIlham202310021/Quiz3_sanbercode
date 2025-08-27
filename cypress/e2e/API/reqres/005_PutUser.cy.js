/// <reference types="cypress" />

describe('Put Users API Test', () => {
    it('PUT Users', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers: {
            'x-api-key': 'reqres-free-v1' 
            },
            body: {
                "name": "Ziona",
                "job": "Product Manager"
            }
        })
        .then((response) => {
            // Status Code 201
            expect(response.status).to.eq(200)

            // Response Time 
            expect(response.duration).to.be.below(500)

            // Response Body String
            const Name = response.body.name;
            expect(Name).to.equal('Ziona');

            // Response body has job manager 
            const job = response.body.job;
            expect(job).to.equal('Product Manager');

            // Response body has 'updatedAt' properties
            const data = response.body;
            expect(data).to.have.property('updatedAt');
        })
    })
})