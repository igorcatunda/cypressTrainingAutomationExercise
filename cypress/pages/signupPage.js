export class SignUpPage {
    getLoginSignUpButton(){
        return cy.get('a[href="/login"]').contains('Signup / Login');        
    }
    clickGetLoginSignUpButton(){
        this.getLoginSignUpButton().click();
    }
    fillUpForm(name, email){
        cy.get('input[data-qa="signup-name"]').type(name);
        cy.get('input[data-qa="signup-email"]').type(email);
    }
    clickToSignUp(){
        cy.get('button[data-qa="signup-button"]').should('have.text', 'Signup').click();
    }
    clickGender(){
         cy.get('input[type="radio"][value="Mr"]').check().should('be.checked');
    }
    setPassword(pw){
        cy.get('input[data-qa="password"]').type(pw);
    }
    setDateOfBirth(day, month, year){
        cy.get('select[data-qa="days"]').select(day).should('have.value', day);
        cy.get('select[data-qa="months"]').select(month).should('have.value', 11); // Will fix this for a better assertion, eventually.
        cy.get('select[data-qa="years"]').select(year).should('have.value', year);
    }
    setCountry(country){
        cy.get('select[data-qa="country"]').select(country).should('have.value', country);
    }
    fillBasicInfo(){
        cy.fixture('basicdata').as('basicData');
        cy.get('@basicData').then((basicData) => {
            cy.get('#first_name').type(basicData.firstname);
            cy.get('#last_name').type(basicData.lastname);
            cy.get('#company').type(basicData.company);
            cy.get('#address1').type(basicData.address);
            cy.get('#state').type(basicData.state);
            cy.get('#city').type(basicData.city);
            cy.get('#zipcode').type(basicData.zipcode);
            cy.get('#mobile_number').type(basicData.mobile);
        });
    }
    clickToCreateAccount(){
        cy.get('button[data-qa="create-account"]').should('have.text', 'Create Account').click();
    }
}
export const signUpPage = new SignUpPage();