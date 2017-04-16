import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>Hello world</h1>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const mountNode = document.getElementById('app');

  ReactDOM.render(<App />, mountNode);
});
