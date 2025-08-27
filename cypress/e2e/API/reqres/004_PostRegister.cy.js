/// <reference types="cypress" />

describe('Post Users API Test', () => {
    it('POST Users Register', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            headers: {
            'x-api-key': 'reqres-free-v1' 
            },
            body: {
                "email": "eve.holt@reqres.in",
                "password": "evelyn39"
            }
        })
        .then((response) => {
            // Status Code 201
            expect(response.status).to.eq(200)

            // Response Time 
            expect(response.duration).to.be.below(500)

            // Response Body String
            const id = response.body.id;
            expect(id).to.equal(4);

            // Response body has token properties
            expect(response.body).to.have.property('token');
        })
    })
})