import React from "react";
import { shallow } from "enzyme";
import Objectives from "./Objectives";

describe("Objectives", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Objectives />);
    expect(wrapper).toMatchSnapshot();
  });
});
