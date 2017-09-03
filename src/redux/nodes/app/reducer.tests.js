import expect from 'expect';

import reducer, { initialState } from 'redux/nodes/app/reducer';

describe('App - reducer', () => {
  describe('dispatching the login actions', () => {
    describe('LOGIN_REQUEST', () => {
      it('sets the loading boolean to true', () => {
        const action = { type: 'LOGIN_REQUEST' };

        expect(reducer(initialState, action)).toEqual({
          ...initialState,
          loading: true,
        });
      });
    });

    describe('LOGIN_SUCCESS', () => {
      it('saves the JWT to state', () => {
        const action = { type: 'LOGIN_SUCCESS', payload: { jwt: 'jwt' } };

        expect(reducer(initialState, action)).toEqual({
          ...initialState,
          session: { jwt: 'jwt' },
        });
      });
    });

    describe('LOGIN_FAILURE', () => {
      it('removes the JWT from state', () => {
        const action = { type: 'LOGIN_FAILURE' };
        const state = { ...initialState, session: { jwt: 'jwt' } };

        expect(reducer(state, action)).toEqual({
          ...initialState,
          session: {},
        });
      });
    });
  });

  describe('dispatching the logout actions', () => {
    describe('LOGOUT_REQUEST', () => {
      it('sets the loading boolean to true', () => {
        const action = { type: 'LOGOUT_REQUEST' };

        expect(reducer(initialState, action)).toEqual({
          ...initialState,
          loading: true,
        });
      });
    });

    describe('LOGOUT_SUCCESS', () => {
      it('removes the JWT from state', () => {
        const action = { type: 'LOGOUT_SUCCESS' };
        const state = { ...initialState, session: { jwt: 'jwt' } };

        expect(reducer(state, action)).toEqual({
          ...initialState,
          session: {},
        });
      });
    });

    describe('LOGOUT_FAILURE', () => {
      it('sets the loading boolean to false', () => {
        const action = { type: 'LOGOUT_FAILURE' };
        const state = { ...initialState, loading: true };

        expect(reducer(state, action)).toEqual({
          ...initialState,
          loading: false,
        });
      });
    });
  });
});
