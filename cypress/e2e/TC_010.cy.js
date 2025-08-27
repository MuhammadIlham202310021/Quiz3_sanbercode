import LoginPage from "../pageObjects/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login dengan username yang benar namun seluruhnya menggunakan huruf kecil dan password yang benar', () => {
    // Step 1: Buka halaman login
    LoginPage.visit();

    // Step 2: Input username benar namun seluruhnya menggunakan huruf kecil
    LoginPage.enterUsername('admin')

    // Step 3: Input password valid
    LoginPage.enterPassword('admin123')

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
