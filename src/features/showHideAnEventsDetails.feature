Feature 2: Show/Hide an Event’s Details

	Scenario 1: An event element is collapsed by default
	Given a user has searched for a city and found a list of events
	When a list of events is returned to the user
	Then the user should see the event details collapsed by default to save space on their browser

	Scenario 2: User can expand an event to see its details
	Given the list of events is returned to the user
	When the user clicks a button to expand the details of the event
	Then the event will expand to show the user more details about the event

	Scenario 3: User can collapse an event to hide its details
	Given the user has expanded the details for an event
	When the user clicks the button to collapse the details of the event
	Then the event details will be hidden from view from the user