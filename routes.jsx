import React from 'react';
import { Route } from 'react-router';

import App from './App';
import { Parent, Child } from './Components';

export default (
  <Route path="/" component={App}>
    <Route path="parent" component={Parent}>
      <Route path="child" component={Child} />
      <Route path="child/:id" component={Child} />
    </Route>
  </Route>
)
