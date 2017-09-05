import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import history from 'redux/history';

export default [
  thunkMiddleware,
  routerMiddleware(history),
];
