import React from "react";
import { mount, shallow } from "enzyme";
import CitySearch from "../CitySearch";
import App from "../App";
import { mockData } from "../mock-data";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppWrapper;
    given("a user is on the main page,", () => {
      AppWrapper = mount(<App />);
    });

    when("an event is displayed", () => {
      expect(AppWrapper.find(".event")).toBeDefined();
    });

    then("event details will be collapsed.", async () => {
      const eventDetails = await AppWrapper.find(".event .more-info");
      expect(eventDetails.find(".hide")).toBeDefined();
    });
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("a user has list of events", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on an individual event", () => {
      AppWrapper.update();
      let Event = AppWrapper.find(".event");
      Event.find(".extra-details").at(0).simulate("click");
    });

    then("the event details will be displayed.", () => {
      const EventDetails = AppWrapper.find(".event .more-info");
      expect(EventDetails.find(".show")).toBeDefined();
    });
  });

  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);

    given("a user has expanded an individual event,", () => {
      const EventDetails = AppWrapper.find(".event .more-info");
      expect(EventDetails.find(".show")).toBeDefined();
    });

    when("a user has clicked “minimize”", () => {
      AppWrapper.update();
      let Event = AppWrapper.find(".event");
      Event.find(".show-more").at(0).simulate("click");
    });

    then("the event details will be hidden.", () => {
      const EventDetails = AppWrapper.find(".event .more-info");
      expect(EventDetails.find(".hidden")).toBeDefined();
    });
  });
});
