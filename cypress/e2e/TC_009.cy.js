describe('OrangeHRM - Negative Test Case', () => {
  it('Login tanpa mengisi username dan password', () => {
    // Step 1: Buka halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Step 2: Tidak Input username
    cy.get('input[name="username"]').should('have.value', '')

    // Step 3: Tidak Input password
    cy.get('input[name="password"]').should('have.value', '')

    // Step 4: Klik tombol login
    cy.get('button[type="submit"]').click();

    // Assertion: validasi pesan error muncul
    cy.get('.oxd-input-field-error-message ')
        .should('be.visible')
        .and('contain', 'Required');
  });
});
