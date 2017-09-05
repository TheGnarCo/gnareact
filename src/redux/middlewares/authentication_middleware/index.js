import helpers from './helpers';
import storage from '../../../storage';

const authMiddleware = () => next => (action) => {
  if (helpers.isLoginAction(action)) {
    storage.setItem('auth_token', action.payload.jwt);
  }

  if (helpers.isLogoutAction(action)) {
    storage.removeItem('auth_token');
  }

  if (helpers.isFailureAction(action) && helpers.isUnauthorizedError(action)) {
    storage.removeItem('auth_token');
  }

  return next(action);
};

export default authMiddleware;
