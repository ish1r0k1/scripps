import React from 'react'
import PropTypes from 'prop-types'
import { IMAGE_DEFAULT_SIZE, IMAGE_XLARGE_SIZE } from '../../constants'

const Artwork = ({ track }) => {
  const imgSrc = track.artwork_url.replace(IMAGE_DEFAULT_SIZE, IMAGE_XLARGE_SIZE)

  return (
    <div className="artwork">
      <div className="artwork__image">
        <img src={imgSrc} alt=""/>
      </div>
    </div>)
}

Artwork.propTypes = {
  track: PropTypes.object.isRequired
}

export default Artwork
