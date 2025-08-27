/// <reference types="cypress" />

describe('Delete Users API Test', () => {
    it('DELETE Users', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {
            'x-api-key': 'reqres-free-v1' 
            }
        })
        .then((response) => {
            // Status Code 201
            expect(response.status).to.eq(204)

            // Response Time 
            expect(response.duration).to.be.below(500)

            // Response Body String
            expect(response.body).to.be.empty;
            
        })
    })
})