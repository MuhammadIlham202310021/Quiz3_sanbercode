import LoginPage from "../pageObjects/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login dengan username yang Salah dan password yang Benar', () => {
    // Step 1: Buka halaman login
    LoginPage.visit();

    // Step 2: Input username Salah
    LoginPage.enterUsername("Pegawai");

    // Step 3: Input password Benar
    LoginPage.enterPassword("admin123");  

    // Intercept request login
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginFailed');

    // Step 4: Klik tombol login
    LoginPage.clickLogin();

    // Tunggu request login selesai
    cy.wait('@loginFailed');

    // Assertion: validasi pesan error muncul
    LoginPage.assertErrorMessage('Invalid credentials');
  });
});
