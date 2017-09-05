import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import app from 'redux/nodes/app/reducer';

export default combineReducers({
  app,
  form: formReducer,
  router: routerReducer,
});
