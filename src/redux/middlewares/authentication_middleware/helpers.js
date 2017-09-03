import { endsWith, get } from 'lodash';
import appConfig from '../../nodes/app/config';

const { LOGIN_SUCCESS, LOGOUT_SUCCESS } = appConfig.actionTypes;
const UNAUTHORIZED_ERROR = 401;

const isFailureAction = (action) => {
  return endsWith(action.type, '_FAILURE');
};

const isLoginAction = action => action.type === LOGIN_SUCCESS;
const isLogoutAction = action => action.type === LOGOUT_SUCCESS;

const isUnauthorizedError = action => get(action, 'payload.errors.http_status') === UNAUTHORIZED_ERROR;

export default {
  isFailureAction,
  isLoginAction,
  isLogoutAction,
  isUnauthorizedError,
};
