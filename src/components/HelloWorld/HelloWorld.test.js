import React from 'react';
import {shallow} from 'enzyme';
import HelloWorld from './HelloWorld';

test('HelloWorld renders correctly', () => {
  const component = shallow(<HelloWorld/>);
  expect(component.find('div')).toHaveLength(1);
})