describe('OrangeHRM - Negative Test Case', () => {
  it('Login dengan username yang benar namun seluruhnya menggunakan huruf kapital dan password yang benar', () => {
    // Step 1: Buka halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Step 2: Input username benar namun seluruhnya menggunakan huruf kapital
    cy.get('input[name="username"]').type('ADMIN');

    // Step 3: Input password valid
    cy.get('input[name="password"]').type('admin123');

    // Intercept request login
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
    
    // Step 4: Klik tombol login
    cy.get('button[type="submit"]').click();

    // Tunggu request login selesai
    cy.wait('@loginRequest');

    // Assertion: pastikan diarahkan ke dashboard
    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  });
});
