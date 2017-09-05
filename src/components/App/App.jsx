import React, { Component } from 'react';
import { node } from 'prop-types';

class App extends Component {
  static propTypes = {
    children: node,
  };

  render () {
    const { children } = this.props;

    return (
      <div className="app">
        <h1>Gnareact</h1>
        {children}
      </div>
    );
  }
}

export default App;
