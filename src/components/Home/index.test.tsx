import * as React from 'react';
import * as enzyme from 'enzyme';
import Home from './index';
import Hello from '../Hello';

it('Test Home Snapshot', () => {
  const wrapper = enzyme.shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});
