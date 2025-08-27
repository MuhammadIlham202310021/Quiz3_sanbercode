class LoginPage {

    // Property
    usernameInput = 'input[name="username"]';
    passwordInput = 'input[name="password"]';
    loginButton = 'button[type="submit"]';
    dashboardHeader = 'h6';
    errorMessage = '.oxd-alert-content';
    requiredMessage = '.oxd-input-field-error-message';

    // Method: Buka halaman login
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }
    
    // Method: Isi Username
    enterUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    // Method: Isi Password
    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }   

    // Method: Klik tombol login
    clickLogin() {  
        cy.get(this.loginButton).click();
    }

    // Method: Berhasil login
    assertLoginSuccess() {
    cy.url().should('include', '/dashboard'); // validasi url
    cy.get(this.dashboardHeader)
      .should('contain', 'Dashboard')
    }

    // Method: Dapatkan pesan error salah password atau username
    assertErrorMessage(message) {
        cy.get(this.errorMessage)
        .should('be.visible')
        .and('contain', message);
    }

    // Method: Mengosongkan nilai password
    PasswordEmpty() {
    cy.get(this.passwordInput).should('have.value', '');
    }

    // Metohd: Mengosongkan nilai username
    UsernameEmpty() {
        cy.get(this.usernameInput).should('have.value', '')
    }

    // Method:  mendapatkan pesan error Mengosongkan input
    assertRequiredMessage(message) {
        cy.get(this.requiredMessage)
        .should('be.visible')
        .and('contain', message);
    }
}

export default new LoginPage();