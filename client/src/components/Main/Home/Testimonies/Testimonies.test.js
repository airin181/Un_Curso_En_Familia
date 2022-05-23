import React from "react";
import { shallow } from "enzyme";
import Testimonies from "./Testimonies";

describe("Testimonies", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Testimonies />);
    expect(wrapper).toMatchSnapshot();
  });
});
