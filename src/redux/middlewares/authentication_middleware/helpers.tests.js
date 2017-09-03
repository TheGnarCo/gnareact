import expect from 'expect';

import helpers from './helpers';

describe('Authentication middleware - helpers', () => {
  describe('#isFailureAction', () => {
    it('returns true when the action type ends in _FAILURE', () => {
      const action = { type: 'SOMETHING_FAILURE' };

      expect(helpers.isFailureAction(action)).toEqual(true);
    });

    it('returns false when the action type does not end in _FAILURE', () => {
      const action = { type: 'SOMETHING_FAILUR' };

      expect(helpers.isFailureAction(action)).toEqual(false);
    });
  });

  describe('#isLoginAction', () => {
    it('returns true when the action type is the login success action type', () => {
      const action = { type: 'LOGIN_SUCCESS' };

      expect(helpers.isLoginAction(action)).toEqual(true);
    });

    it('returns false when the action type is not the login success action type', () => {
      const action = { type: 'LOGIN_FAILURE' };

      expect(helpers.isLoginAction(action)).toEqual(false);
    });
  });

  describe('#isLogoutAction', () => {
    it('returns true when the action type is the logout success action type', () => {
      const action = { type: 'LOGOUT_SUCCESS' };

      expect(helpers.isLogoutAction(action)).toEqual(true);
    });

    it('returns false when the action type is not the logout success action type', () => {
      const action = { type: 'LOGOUT_FAILURE' };

      expect(helpers.isLogoutAction(action)).toEqual(false);
    });
  });

  describe('#isUnauthorizedError', () => {
    it('returns true when the action payload has an unauthorized http status', () => {
      const action = {
        type: 'FOOBAR',
        payload: {
          errors: {
            http_status: 401,
          },
        },
      };

      expect(helpers.isUnauthorizedError(action)).toEqual(true);
    });

    it('returns false when the action payload does not have an unauthorized http status', () => {
      const action = {
        type: 'FOOBAR',
        payload: {
          errors: {
            http_status: 500,
          },
        },
      };

      expect(helpers.isUnauthorizedError(action)).toEqual(false);
    });

    it('returns false when there is no action payload http status', () => {
      const action = {
        type: 'FOOBAR',
        payload: {},
      };

      expect(helpers.isUnauthorizedError(action)).toEqual(false);
    });
  });
});
