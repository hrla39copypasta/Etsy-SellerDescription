/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
// import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders one App Component', () => {
    wrapper = shallow(<App />);
    expect(wrapper.contains('hi')).toEqual(true);
  });

  test('Finds button', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find("button").text()).toContain("PUSH ME");
  });
});
