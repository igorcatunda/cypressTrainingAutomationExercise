export class LoginPage {
    fillLoginForm(email, password) {
        cy.get('input[data-qa="login-email"]').type(email);
        cy.get('input[data-qa="login-password"]').type(password);
    }
    verifyLoginTrigger(loginName) {
        cy.contains('li', loginName)
            .should('be.visible');   //Tricky, but there is a 'logged as' in the WebSite, so instead of asserting a Logout button, i decided to assert the name of the User.
    }
    clickLoginButton() {
        return cy.get('button[data-qa="login-button"]').should('have.text', 'Login').click();
    }
}
export const loginPage = new LoginPage();