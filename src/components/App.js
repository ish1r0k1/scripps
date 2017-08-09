import React from 'react'
import PropTypes from 'prop-types'
import Message from '../containers/Message'

const App = ({ children }) => (
  <div className="app">
    <Message />
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.element
}

export default App
