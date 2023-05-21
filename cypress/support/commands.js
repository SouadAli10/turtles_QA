//If an api was present we can create a api based log in to reduce the UI dependency 

Cypress.Commands.add('uiLogIn', (accountInformation) => {
    // the forms are consistent enough to be converted in a Page Object Model but we don't need to over do it here 
    cy.get('#txt-username').clear().type(accountInformation.userName);
    cy.get('#txt-password').clear().type(accountInformation.password);
    cy.get('#btn-login').click();
    }
);