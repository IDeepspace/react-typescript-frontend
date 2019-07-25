import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../src/components/Header/index';

it('should render', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.text()).toEqual('Header Content');
});

it('Test Header Snapshot', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
