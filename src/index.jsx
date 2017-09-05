import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'Router';
import 'index.scss';

if (typeof window !== 'undefined') {
  global.document.addEventListener('DOMContentLoaded', () => {
    const mountNode = global.document.getElementById('app');

    ReactDOM.render(<Router />, mountNode);
  });
}
