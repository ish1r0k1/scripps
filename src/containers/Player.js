import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Timer, Progress } from 'react-soundplayer/components'
import { PlayButton, VolumeControl } from '../components/Player'

class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    seek: PropTypes.func.isRequired,
    track: PropTypes.object.isRequired,
  }

  render() {
    const { player, play, pause, seek, track } = this.props

    return (
      <div className="player">
        <div className="player-timeline">
          <Progress
            value={(player.currentTime / player.duration) * 100}
            onSeekTrack={(x) => seek(player.duration * x)}
          />
        </div>
        <div className="container">
          <div className="player-controls">
            <PlayButton
              playing={player.playing}
              play={play}
              pause={pause}
            />
            <div className="player-controls__time">
              <Timer
                duration={this.props.player.duration}
                currentTime={this.props.player.currentTime}
              />
            </div>
            <div className="player-controls__title">{track.title}</div>
            <div className="player-controls__volume">
{/*
              <VolumeControl />
*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    player: state.player
  }
}

export default connect(
  mapStateToProps,
)(Player)
