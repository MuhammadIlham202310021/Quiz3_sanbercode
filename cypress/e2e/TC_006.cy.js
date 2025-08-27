import LoginPage from "../pageObjects/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login dengan mengisi username yang Salah tanpa mengisi password', () => {
    // Step 1: Buka halaman login
    LoginPage.visit();

    // Step 2: Input username Salah
    LoginPage.enterUsername('Pegawai');

    // Step 3: Tidak Input password
    LoginPage.PasswordEmpty();

    // Intercept request login
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Required');

    // Step 4: Klik tombol login
    LoginPage.clickLogin();

    cy.wait(500);

    // Tunggu request login selesai
    cy.get('@Required.all').should('have.length', 0);

    // Assertion: validasi pesan Required muncul
    LoginPage.assertRequiredMessage("Required");
  });
});
