import React from "react";
import { shallow } from "enzyme";
import GetInvolved from "./GetInvolved";

describe("GetInvolved", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GetInvolved />);
    expect(wrapper).toMatchSnapshot();
  });
});
