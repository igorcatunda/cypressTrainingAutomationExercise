import { loginPage } from "../pages/loginPage";
import { mainPage } from "../pages/mainPage";
import { signUpPage } from "../pages/signupPage";

describe('Automation Exercise Website Test Suite', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/");
    });

    it.only('Verify Main page from title for checking', () => {
        mainPage.verifyTitle('Automation Exercise');
    });
    //I commented out this test case because i've made a mistake on creating branches on git :(. This should be normalized on Main branch.
    /*it.only('Signs up an account', () => {
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
    }); */
    it.only('Logins to the account created', () => {
        signUpPage.getLoginSignUpButton();
        signUpPage.clickGetLoginSignUpButton();
        loginPage.fillLoginForm('test@t357.com', 'Test@1234');
        loginPage.clickLoginButton();
        loginPage.verifyLoginTrigger('Going Ballistic');
    });
});