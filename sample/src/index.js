import React from 'react';
import ReactDom from 'react-dom'
import {Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import onlineGrid from './components/onlineGrid';

import store from './store'

import css from './styles/style.styl'

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={onlineGrid} />
        <Route path="detail" component={onlineGrid} />
      </Route>
    </Router>
  </Provider>
)

ReactDom.render(router, document.getElementById('main'));