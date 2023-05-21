
import users from '../fixtures/users.json'

describe('Login Tests', () => {
    context('Login Flow', () => {
        beforeEach(() => {
            cy.visit('/profile.php#login');
        })

        it('User Logs in with Valid User', () => {
            cy.uiLogIn(users.validUser);
            cy.url().should('contain', '/#appointment');
        })

        it('User Logs in with an Invalid User', () => {
            cy.uiLogIn(users.invalidUser);
            cy.url().should('not.contain', '/#appointment');
            cy.get('.lead.text-danger').should('exist');
            cy.contains('Login failed! Please ensure the username and password are valid');
        })
    })

    context('Protected Routes', () => {
        beforeEach(() => {
            cy.visit('/profile.php');
        })

        it('Non Logged in User tries to directly link to protected routes', () => {
            cy.get('#txt-username').should('exist');
            cy.get('#txt-password').should('exist');
        })
    })

    context('Logout Flow', () => {


        it('Logout', () => {
            cy.visit('/profile.php#login');
            cy.uiLogIn(users.validUser);
            cy.get('#menu-toggle').click();
            cy.contains('Logout').click();
            cy.url().should('contain', '/');
    
        })
    })
})