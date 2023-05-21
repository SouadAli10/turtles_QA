
import users from '../fixtures/users.json'

const appointmentConfirmation = (values) => {
    cy.get('#facility').contains(values.facility);
    cy.get('#hospital_readmission').contains(values.hospital_readmission);
    cy.get('#program').contains(values.program);
    cy.get('#visit_date').contains(values.visit_date);
    if(values.comment != '') {
        cy.get('#comment').contains(values.comment);
    }

} 

const appointmentHistory = (values) => {
    cy.contains(values.visit_date).parent().within(() => {
        cy.get('#facility').contains(values.facility);
        cy.get('#hospital_readmission').contains(values.hospital_readmission);
        cy.get('#program').contains(values.program);
        if(values.comment != '') {
            cy.get('#comment').contains(values.comment);
        }
    })


} 
describe('Appointment Tests', () => {
    beforeEach(() => {
        cy.visit('/profile.php#login');
        cy.uiLogIn(users.validUser);
    })
    context('Empty History', () => {
        it('User without Appointments shows an empty history', () => {
            cy.get('#menu-toggle').click();
            cy.contains('History').click();
            cy.contains('No appointment.');
        })
    })

    context('Appointments Creation', () => {
        beforeEach(() => {
            cy.visit('/#appointment');
        })
        it('User creates an appointment with mandatory fields', () => {
            cy.get('#txt_visit_date').clear().type('10/12/2022{enter}');
            cy.get('#btn-book-appointment').click();
            cy.contains('Appointment Confirmation');
            appointmentConfirmation({
                facility: 'Tokyo CURA Healthcare Center',
                hospital_readmission: 'No',
                program:  'Medicare',
                visit_date: '10/12/2022',
                comment: ''
            });
            cy.get('#menu-toggle').click();
            cy.contains('History').click();

            appointmentHistory({
                facility: 'Tokyo CURA Healthcare Center',
                hospital_readmission: 'No',
                program:  'Medicare',
                visit_date: '10/12/2022',
                comment: ''
            });
        })


        it('User creates an appointment with all fields', () => {
            cy.get('#chk_hospotal_readmission').check();
            cy.get('#txt_comment').clear().type('This is a comment');
            cy.get('#txt_visit_date').clear().type('10/08/2022{enter}');
            cy.get('#btn-book-appointment').click();
            cy.contains('Appointment Confirmation');
            appointmentConfirmation({
                facility: 'Tokyo CURA Healthcare Center',
                hospital_readmission: 'Yes',
                program:  'Medicare',
                visit_date: '10/08/2022',
                comment: 'This is a comment'
            });
            cy.get('#menu-toggle').click();
            cy.contains('History').click();

            appointmentHistory({
                facility: 'Tokyo CURA Healthcare Center',
                hospital_readmission: 'Yes',
                program:  'Medicare',
                visit_date: '10/08/2022',
                comment: 'This is a comment'
            });
        })
    })
})