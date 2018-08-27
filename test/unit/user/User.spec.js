import React from "react";
import { User } from "../../../src/pages/user/User";
import { USER_ID, YEAR } from "../../fixtures/data.user";

describe("Projects Page", () => {
  let wrapper;

  const PROPS = {
    userId: USER_ID,
    year: YEAR,
    actionGET: window.sinon.stub().resolves("success")
  };

  beforeEach(() => {
    wrapper = window.mount(<User {...PROPS} />);
  });

  afterEach(() => {
    PROPS.actionGET.resetHistory();
    wrapper.unmount();
  });

  describe("DOM behavior", () => {
    it("should render userId and year", () => {
      // console.log(wrapper.debug());
      expect(wrapper.find(".user-wrapper").text()).contains(USER_ID);
      expect(wrapper.find(".user-wrapper").text()).contains(YEAR);
    });
  });
});
