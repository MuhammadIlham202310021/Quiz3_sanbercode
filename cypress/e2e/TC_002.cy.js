import LoginPage from "../pageObjects/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login dengan username yang Benar dan password yang Salah', () => {
    // Step 1: Buka halaman login
    LoginPage.visit();

    // Step 2: Input username Benar
    LoginPage.enterUsername('Admin');

    // Step 3: Input password Salah
    LoginPage.enterPassword('adasaja');

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
