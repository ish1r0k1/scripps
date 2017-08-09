import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { prepareTitle } from '../../utils'

class Header extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired
  }

  render() {
    const { track } = this.props

    return (
      <h1 className="album__header">
        <div className="title">{prepareTitle(track.title)}</div>
        <div className="username">{track.label_name || track.user.username}</div>
      </h1>
    )
  }
}

export default Header
