import expect from 'expect';

import appConfig from 'redux/nodes/app/config';
import mockStore from 'test/mock_store';
import storage from 'storage';

const authToken = 'abc123';

describe('Authentication middleware', () => {
  beforeEach(() => storage.setItem('auth_token', authToken));
  afterEach(() => storage.removeItem('auth_token'));

  context('when the action type is for the login success action', () => {
    const action = {
      type: appConfig.actionTypes.LOGIN_SUCCESS,
      payload: { jwt: 'jwt' },
    };
    const store = mockStore({});

    it('adds the auth_token to local storage', () => {
      storage.removeItem('auth_token');
      store.dispatch(action);

      expect(storage.getItem('auth_token')).toEqual('jwt');
    });
  });

  context('when the action type is for the logout success action', () => {
    const action = {
      type: appConfig.actionTypes.LOGOUT_SUCCESS,
      payload: {},
    };
    const store = mockStore({});

    it('removes the auth_token from local storage', () => {
      store.dispatch(action);

      expect(storage.getItem('auth_token')).toNotExist();
    });
  });

  context('when the action type is not for the logout success action', () => {
    const action = {
      type: 'FOO',
      payload: {},
    };
    const store = mockStore({});

    it('does not remove the auth_token from local storage', () => {
      store.dispatch(action);

      expect(storage.getItem('auth_token')).toEqual(authToken);
    });
  });

  context('when the action is for an entity that fails to load', () => {
    context('when the payload error is an unauthorized error', () => {
      const action = {
        type: 'entity_name_SOMETHING_FAILURE',
        payload: {
          errors: {
            http_status: 401,
          },
        },
      };
      const store = mockStore({});

      it('removes the auth_token from local storage', () => {
        store.dispatch(action);

        expect(storage.getItem('auth_token')).toNotExist();
      });
    });

    context('when the payload error is not an unauthorized error', () => {
      const action = {
        type: 'entity_name_SOMETHING_FAILURE',
        payload: {
          errors: {},
        },
      };
      const store = mockStore({});

      it('does not remove the auth_token from local storage', () => {
        store.dispatch(action);

        expect(storage.getItem('auth_token')).toEqual(authToken);
      });
    });
  });

  context('when the action type is not a failure action', () => {
    const action = {
      type: 'entity_name_SOMETHING_SUCCESS',
      payload: {
        errors: {
          http_status: 401,
        },
      },
    };
    const store = mockStore({});

    it('does not remove the auth_token from local storage', () => {
      store.dispatch(action);

      expect(storage.getItem('auth_token')).toEqual(authToken);
    });
  });
});
