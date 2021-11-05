Welcome to my application called Meet. This project uses the front end framework: React, to compliment my API Database!

Objective: To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Key Features:

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

Technical Features:

- The app is a React application.
- The app is built using the TDD technique.
- The app uses the Google Calendar API and OAuth2 authentication flow.
- The app uses serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code is hosted in a Git repository on GitHub.
- The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
  as on IE11.
- The app displays well on all screen sizes (including mobile and tablet) widths of 1920px
  and 320px.
- The app passes Lighthouse’s PWA checklist.
- The app works offline or in slow network conditions with the help of a service worker.
- Users are able to install the app on desktop and add the app to their home screen on
  mobile.
- The app is deployed on GitHub Pages.
- The API call uses React axios and async/await.
- The app implements an alert system using an OOP approach to show information to the
  user.
- The app must make use of data visualization (recharts preferred).
- The app is covered by tests with a coverage rate >= 90%.
- The app is monitored using an online monitoring tool.

User Stories and Features:

Feature 1: Filter Events by City

As a user.
I should be able to filter events by city.
So that I can see all the events occurring in my desired city in a concise list.

Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities.
Given user has not searched for a city.
When the user first opens the app.
Then the user will see all events from all cities.

Scenario 2: Users should see a list of suggestions when they search for a city.
Given the user has opened the main page.
When the user begins to search for a city.
Then the user should see suggestions for cities that match the letters that they have already begun typing.

Scenario 3: User can select a city from the suggested list.
Given the user was searching for a city such as “Toronto.”
When the user selects the city that is suggested to them.
Then the user’s city selection should be changed to that city that they clicked and they will be able to see the events in their selected city.

Feature 2: Show/Hide an Event’s Details

As a user.
I should be able to show and hide the event's details.
So that I can choose to see more information about the event but not have the additional information clutter my viewpoint.

Scenario 1: An event element is collapsed by default.
Given a user has searched for a city and found a list of events.
When a list of events is returned to the user.
Then the user should see the event details collapsed by default to save space on their browser.

Scenario 2: User can expand an event to see its details.
Given the list of events is returned to the user.
When the user clicks a button to expand the details of the event.
Then the event will expand to show the user more details about the event.

Scenario 3: User can collapse an event to hide its details
Given the user has expanded the details for an event
When the user clicks the button to collapse the details of the event.
Then the event details will be hidden from view from the user.

Feature 3: Specify Number of Events

As a user.
I should be able to specify the number of events I want to see in the list of returned events.
So that I do not get overwhelmed with the amount of events within the list at one time.

Scenario 1: When the user hasn’t specified a number, 32 is the default number.
Given the user has opened the app.
When a list is returned to the user.
Then only 32 events will be shown to the user to start off.

Scenario 2: User can change the number of events they want to see.
Given the user has opened the app.
When the user selects the specified number of events they’d like to see.
Then the list will show the amount of events depending on that specified number.

Feature 4: Use the App When Offline

As a user.
I should be able to use the app offline to see events without internet connection.
So that I am able to find out information when I am out and about without connection to an internet source.

Scenario 1: Show cached data when there’s no internet connection
Given the user has no internet connection.
When the user checks to see events in their city.
Then the user will be able to see lists of events and their details so they can attend without needing an internet source.

Scenario 2: Show error when user changes the settings (city, time range)
Given the user has no internet connection.
When the user changes the settings such as city or time range.
Then the user will get an error notifying them that they won’t be able to see the events in their chosen city.

Feature 5: Data Visualization

As a user.
I should be able to see a chart of different events in different cities.
So that I can see the difference of event activity across different locations in comparison to each other.

Scenario 1: Show a chart with the number of upcoming events in each city.
Given the user looks at an event.
When the user clicks on the chart shown.
Then the user will be able to see a chart of upcoming events in each city.
