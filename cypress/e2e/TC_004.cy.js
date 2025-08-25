describe('OrangeHRM - Negative Test Case', () => {
  it('Login dengan username dan password yang Salah', () => {
    // Step 1: Buka halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Step 2: Input username Salah
    cy.get('input[name="username"]').type('Pegawai');

    // Step 3: Input password Salah
    cy.get('input[name="password"]').type('adasaja');

    // Intercept request login
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginFailed');

    // Step 4: Klik tombol login
    cy.get('button[type="submit"]').click();

    // Tunggu request login selesai
    cy.wait('@loginFailed');

    // Assertion: validasi pesan error muncul
    cy.get('.oxd-alert-content')
        .should('be.visible')
        .and('contain', 'Invalid credentials');
  });
});
