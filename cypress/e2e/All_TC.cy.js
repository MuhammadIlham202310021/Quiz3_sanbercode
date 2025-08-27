import LoginPage from "../pageObjects/LoginPage";

describe('OrangeHRM - Positive & Negative Test Case', () => {
    // TC_001
    it('Login dengan username dan password yang benar', () => {
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.enterPassword('admin123');
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
        LoginPage.clickLogin();
        cy.wait('@loginRequest');
        LoginPage.assertLoginSuccess();
    });
    
    // TC_002
    it('Login dengan username yang Benar dan password yang Salah', () => {
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.enterPassword('adasaja');
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginFailed');
        LoginPage.clickLogin();
        cy.wait('@loginFailed');
        LoginPage.assertErrorMessage("Invalid credentials")
    });

    // TC_003
    it('Login dengan username yang Salah dan password yang Benar', () => {
        LoginPage.visit();
        LoginPage.enterUsername("Pegawai");
        LoginPage.enterPassword("admin123");
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginFailed');
        LoginPage.clickLogin();   
        cy.wait('@loginFailed');
        LoginPage.assertErrorMessage('Invalid credentials');
    });

    // TC_004
    it('Login dengan username dan password yang Salah', () => {
        LoginPage.visit();
        LoginPage.enterUsername("Pegawai");
        LoginPage.enterPassword("adasaja");
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginFailed');
        LoginPage.clickLogin();
        cy.wait('@loginFailed');
        LoginPage.assertErrorMessage("Invalid credentials")
    });

    // TC_005
    it('Login dengan mengisi username yang benar tanpa mengisi password', () => {
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.PasswordEmpty();
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Required');
        LoginPage.clickLogin();     
        cy.wait(500);
        cy.get('@Required.all').should('have.length', 0);   
        LoginPage.assertRequiredMessage("Required");
    });
    
    // TC_006
    it('Login dengan mengisi username yang salah tanpa mengisi password', () => {
        LoginPage.visit();
        LoginPage.enterUsername('Pegawai');
        LoginPage.PasswordEmpty();      
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Required');
        LoginPage.clickLogin();
        cy.wait(500);
        cy.get('@Required.all').should('have.length', 0);
        LoginPage.assertRequiredMessage("Required");
    });

    // TC_007
    it('Login dengan mengisi password yang benar tanpa mengisi username', () => {
        LoginPage.visit();
        LoginPage.enterPassword('admin123');
        LoginPage.UsernameEmpty();      
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Required');
        LoginPage.clickLogin();
        cy.wait(500);
        cy.get('@Required.all').should('have.length', 0);
        LoginPage.assertRequiredMessage("Required");
    });
    
    // TC_008
    it('Login dengan mengisi password yang salah tanpa mengisi username', () => {
        LoginPage.visit();
        LoginPage.enterPassword('adasaja');
        LoginPage.UsernameEmpty();      
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Required');
        LoginPage.clickLogin();
        cy.wait(500);
        cy.get('@Required.all').should('have.length', 0);
        LoginPage.assertRequiredMessage("Required");
    });

    // TC_009
    it('Login tanpa mengisi username dan password', () => {
        LoginPage.visit();
        LoginPage.UsernameEmpty();
        LoginPage.PasswordEmpty();      
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Required');
        LoginPage.clickLogin();
        cy.wait(500);
        cy.get('@Required.all').should('have.length', 0);
        LoginPage.assertRequiredMessage("Required");
    });
    
    // TC_010
    it('Login dengan username yang benar namun seluruhnya menggunakan huruf kecil dan password yang benar', () => {
        LoginPage.visit();
        LoginPage.enterUsername('admin')
        LoginPage.enterPassword('admin123')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
        LoginPage.clickLogin();
        cy.wait('@loginRequest');
        LoginPage.assertLoginSuccess();
    });
    
    // TC_011
    it('Login dengan username yang benar namun seluruhnya menggunakan huruf besar dan password yang benar', () => {
        LoginPage.visit();
        LoginPage.enterUsername('ADMIN')
        LoginPage.enterPassword('admin123')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
        LoginPage.clickLogin();
        cy.wait('@loginRequest');
        LoginPage.assertLoginSuccess();
    });

});