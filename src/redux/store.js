import { applyMiddleware, compose, createStore } from 'redux';
import middlewares from 'redux/middlewares';
import reducers from 'redux/reducers';

const appliedMiddleware = applyMiddleware(...middlewares);
const initialState = {};

export default createStore(reducers, initialState, compose(appliedMiddleware));
