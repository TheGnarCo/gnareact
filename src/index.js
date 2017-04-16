import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import './index.scss';

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const mountNode = document.getElementById('app');

    ReactDOM.render(<App />, mountNode);
  });
}
