class signInPage
{

    elements = {
        emailInput: ()=>  cy.get('input[type="text"]'),
        passwordInput: ()=> cy.get('input[type="password"]'),
        nextButton: ()=>  cy.get('.styles_btn-primary__2XfZC'),
        eyePass: ()=> cy.get('.svg-inline--fa '),
        membraneLogo: ()=> cy.get('[alt="membrane logo"]'),
        membraneTitle: ()=> cy.get('.styles_appTitle__qn1G-'),
        signInTitle: ()=> cy.get('h2'),
        signUpButton: ()=> cy.get('.styles_buttonContainer__2SyKw'),
        forgotPassButton: ()=>cy.get(':nth-child(2) > .styles_btn-tertiary__2Aebe > button > .styles_buttonContainer__2SyKw > :nth-child(1)'),
        alertFieldRequired: ()=> cy.get('.styles_labelError__3hvbE'),
        alertInvalidEmail: ()=> cy.get(':nth-child(1) > .styles_labelError__3hvbE'),
        nextButtonDisabled: ()=> cy.get('.disabled'),
        popUpAlert: ()=> cy.get('.styles_alert__-D2Fi')
    }


    typeEmail(email){
        this.elements.emailInput().type(email)
    }
    
    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickNextButton(){
        this.elements.nextButton().click()
    }
    
}

export default new signInPage();