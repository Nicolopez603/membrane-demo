/// <reference types="cypress"/>
import signInPage from '../support/pages/signInPage';

describe('Test suite at sign-in',function(){
    beforeEach(function(){
        cy.visit('demo.membrane.trade/sign-in')
        cy.fixture('userCredentials')
        .then(credentials =>{
            this.credentials = credentials;
        })
    });

    it('Validating the URL is secure',function(){ 
        cy.location('protocol')
        .should('contains', 'https');
    });
        
    it('Validating that logo and title is visible',function(){
        signInPage.elements.membraneLogo()
        .should('be.visible');
        
        signInPage.elements.membraneTitle()
        .should('have.text','Membrane')
    }); 

    it('Validating that the title contains Sign-in',function(){
        signInPage.elements.signInTitle()
        .should('contain.text', 'Sign In')
    });    
        
    it('Validating the field "email" have the correct information',function(){
        signInPage.elements.emailInput()
        .should('have.attr', 'placeholder', 'Enter your email');
    }); 
    
    it('Validating the field "Password" have the correct information',function(){
        signInPage.elements.passwordInput()
        .should('have.attr', 'placeholder', 'Insert your password');
   });
        
    it('Validating that Eye(svg) element at the end on the password field',function(){
        signInPage.elements.eyePass()
        .should('be.visible')
    });   

    it('Validating the link sign-up ',function(){
        signInPage.elements.signUpButton()
        .should('be.visible')
        .eq(1).click();
       
        cy.location('pathname').should('contains', '/sign-up')
    });

    it('Validating the link forgot-password ',function(){
        signInPage.elements.forgotPassButton()
        .should('be.visible')
    });

    it('Validating the next button is inactive',function(){
        cy.readFile('cypress/fixtures/userCredentials.json').then(credentials =>{
        signInPage.typeEmail(this.credentials.emailValid)}).then(()=>{
        
        signInPage.elements.nextButtonDisabled()
        .should('be.disabled')
    });
    });

    it('Validating the error message This field is required',function(){

        signInPage.clickNextButton()
        
        signInPage.elements.alertFieldRequired()
        .should('have.text','This field is requiredThis field is required')
    });

    it('Validating the alert contain “Invalid email format”',function(){
       signInPage.elements.emailInput().type('nn!@asd.n')
      
       signInPage.elements.alertInvalidEmail()
       .should('have.text', 'Invalid email format')
    });

    it('Validating the "Next" button is active using email and username',function(){
        cy.readFile('cypress/fixtures/userCredentials.json').then(credentials =>{
        signInPage.typeEmail(this.credentials.emailValid)}).then(()=>{
        
        signInPage.typePassword(this.credentials.password)
        
        signInPage.elements.nextButton()
        .should('not.be.disabled')
    });
    });
        
    it('Validating the “Wrong email or password, try again.” on popup message',function(){
        cy.readFile('cypress/fixtures/userCredentials.json').then(credentials =>{
        signInPage.typeEmail(this.credentials.emailValid)}).then(()=>{
        
        signInPage.typePassword(this.credentials.passwordInvalid)
       
        signInPage.clickNextButton()
       
        signInPage.elements.popUpAlert()
        .should('have.text','Wrong email or password, try again.')  
    });
    });

    it('Making a successful login',function(){
        cy.readFile('cypress/fixtures/userCredentials.json').then(credentials =>{
        signInPage.typeEmail(this.credentials.emailValid)}).then(()=>{
        
        signInPage.typePassword(this.credentials.password)
       
        signInPage.clickNextButton()
       
    });
    });
    });
