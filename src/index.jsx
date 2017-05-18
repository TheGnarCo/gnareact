import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from 'components/App';
import store from 'redux/store';
import 'index.scss';

if (typeof window !== 'undefined') {
  global.document.addEventListener('DOMContentLoaded', () => {
    const mountNode = global.document.getElementById('app');

    ReactDOM.render(<Provider store={store}><App /></Provider>, mountNode);
  });
}
