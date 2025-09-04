import { mainPage } from "../pages/mainPage";
import { signUpPage } from "../pages/signupPage";

describe('Automation Exercise Website Test Suite', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/");
    });

    it.only('Verify Main page from title for checking', () => {
        mainPage.verifyTitle('Automation Exercise');
    });
    it.only('Signs up an account', () => {
        signUpPage.getLoginSignUpButton();
        signUpPage.clickGetLoginSignUpButton();
        signUpPage.fillUpForm('Going Ballisticv2', 'test@7357.com');
        signUpPage.clickToSignUp();
        signUpPage.clickGender();
        signUpPage.setPassword('Test@1234');
        signUpPage.setDateOfBirth('11', 'November', '1994');
        signUpPage.setCountry('Singapore');
        signUpPage.fillBasicInfo();
        signUpPage.clickToCreateAccount();
        signUpPage.verifyAccountCreated();
    });
});