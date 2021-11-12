import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".num-events")).toHaveLength(1);
  });

  test("render text input correctly from prop", () => {
    const numberOfEvents = NumberOfEventsWrapper.prop("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".num-events").prop("value")).toBe(
      numberOfEvents
    );
  });
  
});