Feature: Show and hide event details

  Scenario: An event element is collapsed by default.
    Given a user is on the main page,
    When an event is displayed
    Then event details will be collapsed.

  Scenario: User can expand an event to see its details.
    Given a user has list of events
    When the user clicks on an individual event
    Then the event details will be displayed.

  Scenario: User can collapse an event to hide its details.
    Given a user has expanded an individual event,
    When a user has clicked “minimize”
    Then the event details will be hidden.