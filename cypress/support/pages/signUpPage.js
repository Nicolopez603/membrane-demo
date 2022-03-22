class signUpPage
{
    elements = {
        membraneTitle: ()=> cy.get('.styles_appTitle__qn1G-'),
        membraneLogo: ()=> cy.get('[alt="membrane logo"]'),
        signUpTitle: ()=> cy.get('h2'),
        informativeText: ()=> cy.get('p'),
        requiredFieldText: ()=> cy.get('.styles_span__25oNl'),
        firstNameInput: ()=> cy.get('input[name="firstName"]'),
        lastNameInput: ()=> cy.get('input[name="lastName"]'),
        emailInput: ()=> cy.get('input[name="email"]'),
        countryInput: ()=> cy.get('input[name="country"]'),
        numberInput: ()=> cy.get('input[name="number"]'),
        alreadyAccountButton: ()=> cy.get('.styles_btn-tertiary__2Aebe'),
        alertNameEmptyField: ()=> cy.get(':nth-child(1) > .styles_labelError__3hvbE'),
        alertLastNameEmptyField: ()=> cy.get('.styles_formInputs__2Z4qQ > :nth-child(2) > .styles_labelError__3hvbE'),
        alertEmailEmptyField: ()=> cy.get('.styles_emailItem__3Dped > .styles_labelError__3hvbE'),
        alertNumberEmptyField: ()=> cy.get('.styles_selectorGroup__XXf6C > :nth-child(2) > .styles_labelError__3hvbE'),
        alertInvalidEmail: ()=> cy.get('.styles_emailItem__3Dped > .styles_labelError__3hvbE'),
        buttonNextDisabled: ()=> cy.get('.disabled'),
        selectableList: ()=> cy.get('.styles_selectableList__2GLGZ > :nth-child(1)'),
        buttonNextActivate: ()=> cy.get('.styles_btn-primary__2XfZC > button'),
        bottomOfForm: ()=> cy.get('.styles_formButtons__6fpUS')
    }


    typeEmail(email){
        this.elements.emailInput().type(email)
    }
    
    typeFirstName(name){
        this.elements.firstNameInput().type(name)
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName)
    }

    typeNumber(number){
        this.elements.numberInput().type(number)
    }

}

export default new signUpPage();