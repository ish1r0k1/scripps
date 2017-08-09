import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classNames/bind'

const PlayButton = ({ playing, play, pause }) => {
  return (
    <button
      className="player-controls__play button--icon"
      onClick={() => {
        if (!playing) {
          play()
        } else {
          pause()
        }
      }}
    >
      <span className={classNames({
        'icon-play': !playing,
        'icon-pause': playing
      })} />
    </button>
  )
}

PlayButton.propTypes = {
  playing: PropTypes.bool.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
}

export default PlayButton
