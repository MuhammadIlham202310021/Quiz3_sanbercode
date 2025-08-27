/// <reference types="cypress" />

describe('List Users API Test', () => {
    it('GET List User', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
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
            const emails = response.body.data.map(u => u.email);
            expect(emails).to.include('byron.fields@reqres.in');
            
            // Memverifikasi nilai di dalam array
            expect(response.body.page).to.eq(2)
        })
    })
})