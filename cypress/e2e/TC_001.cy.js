import LoginPage from "../pageObjects/LoginPage";

describe('OrangeHRM - Positive Test Case', () => {
  it('Login dengan username dan password yang benar', () => {

    // Step 1: Buka halaman login
    LoginPage.visit();

    // Step 2: Input username Benar
    LoginPage.enterUsername('Admin');

    // Step 3: Input password Benar
    LoginPage.enterPassword('admin123');

    // Intercept request login
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
    
    // Step 4: Klik tombol login
    LoginPage.clickLogin();

    // Tunggu request login selesai
    cy.wait('@loginRequest');

    // Assertion: pastikan diarahkan ke dashboard
    LoginPage.assertLoginSuccess();
  });
});
