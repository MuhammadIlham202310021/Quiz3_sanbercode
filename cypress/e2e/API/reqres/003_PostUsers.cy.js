/// <reference types="cypress" />

describe('Post Users API Test', () => {
    it('POST User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
            'x-api-key': 'reqres-free-v1' 
            },
            body: {
                "name": "Tomori",
                "job": "leader"
            }
        })
        .then((response) => {
            // Status Code 201
            expect(response.status).to.eq(201)

            // Response Time 
            expect(response.duration).to.be.below(500)

            // Response Body String 
            const name = response.body.name;
            expect(name).to.equal('Tomori');

            // Response body has 'id' and 'createdAt' properties
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');

            //The 'job' in the response is 'leader'
            expect(response.body.job).to.equal("leader");

        })
    })
})