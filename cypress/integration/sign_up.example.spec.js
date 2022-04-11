/// <reference types="cypress"/>
import signUpPage from "../support/pages/signUpPage";

describe("Test suite at sign-up", function () {
  beforeEach(function () {
    cy.visit("demo.membrane.trade/sign-up");

    cy.fixture("userCredentials").then((credentials) => {
      this.credentials = credentials;
    });
  });

  it("Validating text of fields and elements importants", function () {
    signUpPage.elements.membraneTitle().should("contain.text", "Membrane");

    signUpPage.elements.membraneLogo().should("be.visible");

    signUpPage.elements.signUpTitle().should("have.text", " Sign Up");

    signUpPage.elements
      .informativeText()
      .should("have.text", " Please, enter your personal information");

    signUpPage.elements
      .requiredFieldText()
      .should("have.text", "*Required fields");

    signUpPage.elements
      .firstNameInput()
      .should("have.attr", "placeholder", "Enter your first name here");

    signUpPage.elements
      .lastNameInput()
      .should("have.attr", "placeholder", "Enter your last name here");

    signUpPage.elements
      .emailInput()
      .should("have.attr", "placeholder", "Enter your email here");

    signUpPage.elements
      .countryInput()
      .should("have.attr", "placeholder", "Country code");

    signUpPage.elements
      .numberInput()
      .should("have.attr", "placeholder", "Enter your mobile number");

    signUpPage.elements.alreadyAccountButton().should("be.visible");
  });

  it('Validating button "Next" is Disabled', function () {
    signUpPage.elements.buttonNextDisabled().should("be.disabled");
  });

  it('Validating message error "This field is required"', function () {
    signUpPage.elements.firstNameInput().click();

    signUpPage.elements.lastNameInput().click();

    signUpPage.elements.emailInput().click();

    signUpPage.elements.numberInput().click();

    signUpPage.elements.bottomOfForm().click();

    signUpPage.elements
      .alertLastNameEmptyField()
      .should("have.text", "This field is required");

    signUpPage.elements
      .alertNameEmptyField()
      .should("have.text", "This field is required");

    signUpPage.elements
      .alertEmailEmptyField()
      .should("have.text", "This field is required");

    signUpPage.elements
      .alertNumberEmptyField()
      .should("have.text", "This field is required");
  });

  it('Validating the message error "Invalid email format"', function () {
    cy.readFile("cypress/fixtures/userCredentials.json")
      .then((credentials) => {
        signUpPage.typeEmail(this.credentials.emailInvalid);
      })
      .then(() => {
        signUpPage.elements
          .alertInvalidEmail()
          .should("contain.text", "Invalid email format");
      });
  });

  it('Validating all the fields with real data and the button "Next" is active', function () {
    cy.readFile("cypress/fixtures/userCredentials.json")
    .then((credentials) => {
      signUpPage.typeEmail(this.credentials.emailValid);
      signUpPage.typeFirstName(this.credentials.firstName);
      signUpPage.typeLastName(this.credentials.lastName);
      signUpPage.typeNumber(this.credentials.phoneNumber);
    })
    .then(() => {
      signUpPage.elements.countryInput().click({ force: true });
      signUpPage.elements.selectableList().click();
      signUpPage.elements.buttonNextActivate().should("not.be.disabled");
      signUpPage.elements.buttonNextActivate().click();
    });
  });
});
