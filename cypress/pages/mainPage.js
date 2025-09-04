export class MainPage {
    verifyTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }

}
export const mainPage = new MainPage();