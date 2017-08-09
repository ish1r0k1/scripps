import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ track }) => (
  <h1 className="album__header">
    <div className="title">{track.title}</div>
    <div className="username">{track.label_name || track.user.username}</div>
  </h1>)

Header.propTypes = {
  track: PropTypes.object.isRequired
}

export default Header
