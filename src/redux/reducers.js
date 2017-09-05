import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from 'redux/nodes/app/reducer';

export default combineReducers({
  app,
  router: routerReducer,
});
