Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number 12 is the default number
    Given a user is on the main page
    When the user hasn’t specified a number of events
    Then the default amount of events will be shown
  Scenario: User can change the number of events they want to see
    Given a user is on the main page
    When a user specifies the number of events
    Then the specified number of events is displayed