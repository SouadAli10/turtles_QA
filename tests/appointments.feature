Feature: Appointment Flow 

    @AUTOMATED
    Scenario: User without Appointments shows an empty history
        Given the user is logged in
        And the user does not have appoitmnets
        When the user navigates to the "History" page
        And history is shown as empty

    @AUTOMATED
    Scenario Outline: User creates an Appointment with <form_fields> form fields and check the history
        Given the user is logged in
        When the user navigates to the "Appointments" page
        Then the user fills the <form_fields> fields in the "Appointments" form
        And the user submits the form
        Then the user sees a brief summary for the inputed appoitmnet information
        When the user navigates to the "History" page
        Then the user sees the created appoitmnet information
        Examples:
          | form_fields            |
          | all                    |
          | mandatory              |


