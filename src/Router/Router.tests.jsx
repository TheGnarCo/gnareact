import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import history from 'redux/history';
import HomePage from 'pages/HomePage';
import Router from 'Router';
import store from 'redux/store';

describe('Router - component', () => {
  it('renders', () => {
    const Component = mount(<Router />);

    expect(Component.length).toEqual(1);
  });

  it('renders an App component', () => {
    const Component = mount(<Router />);
    const App = Component.find('App');

    expect(App.length).toEqual(1);
  });

  context('ConnectedRouter', () => {
    const Component = mount(<Router />);
    const ConnectedRouter = Component.find('ConnectedRouter');

    it('renders', () => expect(ConnectedRouter.length).toEqual(1));

    it('sets the history prop', () => {
      expect(ConnectedRouter.prop('history')).toEqual(history);
    });
  });

  context('Provider', () => {
    const Component = mount(<Router />);
    const Provider = Component.find('Provider');

    it('renders', () => expect(Provider.length).toEqual(1));

    it('sets the store on the Provider', () => expect(Provider.prop('store')).toEqual(store));
  });

  it('routes to the HomePage', () => {
    const Component = mount(<Router />);
    const HomeRoute = Component.find('Route').findWhere(c => c.prop('path') === '/');

    expect(HomeRoute.prop('component')).toEqual(HomePage);
  });
});
