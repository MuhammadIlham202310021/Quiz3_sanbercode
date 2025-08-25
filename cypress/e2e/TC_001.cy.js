describe('OrangeHRM - Positive Test Case', () => {
  it('Login dengan username dan password yang benar', () => {

    // Step 1: Buka halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Step 2: Input username Benar
    cy.get('input[name="username"]').type('Admin');

    // Step 3: Input password Benar
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
