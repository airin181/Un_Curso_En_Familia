import React from "react";
import { shallow } from "enzyme";
import Program from "./Program";

describe("Program", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Program />);
    expect(wrapper).toMatchSnapshot();
  });
});
