import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createRoutes from './routes'
import configureStore from './configureStore'

const store = configureStore({}, hashHistory)
const history = syncHistoryWithStore(hashHistory, store)
const routes = createRoutes(store)

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.querySelector('.root')
)
