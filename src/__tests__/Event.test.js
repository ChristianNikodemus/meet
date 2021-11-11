import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let eventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    eventWrapper = shallow(<Event event={event} />);
  });

  test("the element is collapsed by default", () => {
    eventWrapper.setState({
      collapsed: true,
    });
    expect(eventWrapper.find(".extra-details")).toHaveLength(0);
  });

});