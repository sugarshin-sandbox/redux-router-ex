import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import routes from './routes';
import configureStore from './configureStore';

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

const store = configureStore();

render(
  <Provider store={store}>
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>
, rootEl);
