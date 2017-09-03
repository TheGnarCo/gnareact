import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import authenticationMiddleware from 'redux/middlewares/authentication_middleware';
import history from 'redux/history';

export default [
  thunkMiddleware,
  routerMiddleware(history),
  authenticationMiddleware,
];
