import React from 'react'
import PropTypes from 'prop-types'
import Artwork from './Artwork'

const Information = ({ track }) => (
  <div>
    <Artwork track={track} />
  </div>)

Information.propTypes = {
  track: PropTypes.object.isRequired,
}

export default Information
