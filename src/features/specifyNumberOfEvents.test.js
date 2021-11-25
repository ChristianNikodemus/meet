import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import NumberOfEvents from "../NumberOfEvents";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number 12 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("a user is on the main page", () => {
      AppWrapper = mount(<App />);
    });

    when("the user hasn’t specified a number of events", () => {
      expect(AppWrapper.state("numberOfEvents")).toBe(12);
      AppWrapper.update();
    });

    then("the default amount of events will be shown", () => {
      expect(AppWrapper.find(".event")).toHaveLength(4);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("a user is on the main page", () => {
      AppWrapper = mount(<App />);
      const EventsQuantity = { target: { value: 8 } };
      AppWrapper.find(".numberOfEvents").simulate("change", EventsQuantity);
    });

    when("a user specifies the number of events", () => {
      expect(AppWrapper.find(".EventList")).toHaveLength(2);

      AppWrapper.update();
    });

    then("the specified number of events is displayed", () => {
      expect(AppWrapper.find(".event")).toHaveLength(4);
    });
  });
});
