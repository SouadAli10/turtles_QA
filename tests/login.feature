Feature: Login/ Authentication Flow 

    @AUTOMATED
    Scenario: User Logs in with Valid User
        Given the user is not logged in
        And the user navigates to the "Log in" page
        When the user enters valid user information
        And submit the login form 
        Then user is logged in 
        And the user is redirected to the "Appointment Booking" page

    @AUTOMATED
    Scenario: User Logs in with Invalid User
        Given the user is not logged in
        And the user navigates to the "Log in" page
        When the user enters invalid user information
        And submit the login form 
        Then user is not logged in 
        And the user is gets an error message
         | Login failed! Please ensure the username and password are valid. |

    @AUTOMATED
    Scenario: Non Logged in User tries to directly link to protected routes
        Given the user is not logged in
        And the user navigates to the "Profile" page
        Then the login Form is shown

    @AUTOMATED
    Scenario: Log out Flow
        Given the user is logged in
        And the user navigates to the "Profile" page
        When the user clicks on the "Log Out" button
        Then the user is redirected to the "Home" page