import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import {Provider } from 'react-redux'


import Main from './components/main'
import Single from './components/single'
import PhotoGrid from './components/photoGrid'

import store, {history} from './store'





const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>

)

render(router, document.getElementById('main'))