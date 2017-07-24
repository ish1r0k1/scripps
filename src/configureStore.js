import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore(initialState, history) {
  const middleware = [promiseMiddleware, routerMiddleware(history)]

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
  )

  return store
}
