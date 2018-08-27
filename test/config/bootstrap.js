import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { expect } from "chai";
import sinon from "sinon";
// Global functions for testing.
window.shallow = shallow;
window.expect = expect;
window.mount = mount;
window.sinon = sinon;
