import React from 'react';
import {shallow, mount} from 'enzyme';
import HelloWorld from './HelloWorld';

test('HelloWorld renders correctly', () => {
  const component = shallow(<HelloWorld/>);
  expect(component.find('div')).toHaveLength(1);
});

test('Hello world should display hello world', () => {
    const hw = mount(
        <HelloWorld />
    );

    expect(hw.text()).toEqual('Hello World')
});
