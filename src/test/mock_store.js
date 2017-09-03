import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import authenticationMiddleware from 'redux/middlewares/authentication_middleware';

export const middlewares = [thunkMiddleware, authenticationMiddleware];

export default (store) => {
  const mockStore = configureStore(middlewares);

  return mockStore(store);
};
