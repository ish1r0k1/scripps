import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './pages/Home'

const routes = (store) => (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
)

export default routes
