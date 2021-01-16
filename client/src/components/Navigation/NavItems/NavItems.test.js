import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavItems from "./NavItems";
import NavItem from "./NavItem/NavItem";

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => {
  wrapper = shallow(<NavItems />);
});

describe("<NavItems />", () => {
  it("should render two <NavItem /> elements if not authenticated", () => {
    wrapper.setProps({ isAuth: false });
    expect(wrapper.find(NavItem)).toHaveLength(2);
    //shallow
    //then .find to look into the component passed into shallow, .find also
    //takes a ckassname as argument
  });
});

describe("<NavItems />", () => {
  it("should render three <NavItem /> elements if authenticated", () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavItem)).toHaveLength(3);
  });

  describe("<NavItems />", () => {
    it("should render login element if not authenticated", () => {
      wrapper.setProps({ isAuth: false });
      expect(wrapper.contains(<NavItem link="/auth">Login</NavItem>)).toEqual(
        true
      );
    });
  });

  describe("<NavItems />", () => {
    it("should render logout element if authenticated", () => {
      wrapper.setProps({ isAuth: true });
      expect(
        wrapper.contains(<NavItem link="/logout">Logout</NavItem>)
      ).toEqual(true);
    });
  });

  // afterEach(() => {});
});
