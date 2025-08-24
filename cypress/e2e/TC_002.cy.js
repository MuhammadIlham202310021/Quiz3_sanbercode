describe('OrangeHRM - Negative Test Case', () => {
  it('Login dengan username yang Benar dan password yang Salah', () => {
    // Step 1: Buka halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Step 2: Input username Benar
    cy.get('input[name="username"]').type('Admin');

    // Step 3: Input password Salah
    cy.get('input[name="password"]').type('adasaja');

    // Step 4: Klik tombol login
    cy.get('button[type="submit"]').click();

    // Assertion: validasi pesan error muncul
    cy.get('.oxd-alert-content')
        .should('be.visible')
        .and('contain', 'Invalid credentials');
  });
});
