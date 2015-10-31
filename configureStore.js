import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import logger from 'redux-logger';
import createHistory from 'history/lib/createBrowserHistory';

import rootReducer from './reducers';

const finalCreateStore = compose(
  reduxReactRouter({ createHistory }),
  applyMiddleware(logger())
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
