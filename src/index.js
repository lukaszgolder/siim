import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './app/app.reducer';
import { appRoutes } from './app/app.routes';

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(apiMiddleware, routerMiddleware(browserHistory), thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    {appRoutes(store)}
  </Provider>,
  document.getElementById('root'),
);
