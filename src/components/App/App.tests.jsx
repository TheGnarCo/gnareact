import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import App from './App';

describe('App - component', () => {
  it('renders', () => {
    const Component = mount(<App />);

    expect(Component.length).toEqual(1);
  });
});
