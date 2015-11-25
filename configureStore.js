import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createBrowserHistory';

import rootReducer from './reducers';

const middlewares = process.env.NODE_ENV === 'production' ?
  [thunk] : [thunk, require('redux-logger')()];

const finalCreateStore = compose(
  reduxReactRouter({ createHistory }),
  applyMiddleware(...middlewares)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
