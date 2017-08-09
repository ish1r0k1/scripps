import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './pages/Home'
import AlbumPage from './pages/Album'
import RegistrationPage from './pages/Registration'
import NotFoundPage from './pages/NotFound'

const routes = (store) => (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/registration" component={RegistrationPage} />
    <Route path="/albums/:id" component={AlbumPage} />
    <Route path="/not_found" component={NotFoundPage} />
  </Route>
)

export default routes
