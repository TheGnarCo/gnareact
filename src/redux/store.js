import { applyMiddleware, compose, createStore } from 'redux';
import Es6ObjectAssign from 'es6-object-assign';
import Es6Promise from 'es6-promise';
import middlewares from 'redux/middlewares';
import reducers from 'redux/reducers';

const appliedMiddleware = applyMiddleware(...middlewares);
const initialState = {};

// ie polyfills
Es6ObjectAssign.polyfill();
Es6Promise.polyfill();

export default createStore(reducers, initialState, compose(appliedMiddleware));
