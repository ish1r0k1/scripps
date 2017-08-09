import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classNames/bind'
import { connect } from 'react-redux'
import { dismissMessage } from '../actions/message'

const Message = ({ message, dismissMessage }) => (
  <div
    className={classNames('message', {
      show: message && message.length > 0
    })}
    onClick={dismissMessage}
  >
    {message}
  </div>
)

Message.propTyps = {
  message: PropTypes.string.isRequired,
  dismissMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {...state.message}
}

export default connect(mapStateToProps, { dismissMessage })(Message)
