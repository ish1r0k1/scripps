import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { CLIENT_ID } from '../constants'
import Player from './Player'
import PlayerLoading from '../components/PlayerLoading'

class PlayerContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { isWaiting: true }
    this.trackReady = this.trackReady.bind(this)
  }

  trackReady() {
    this.setState({ isWaiting: false })
  }

  render() {
    const { isWaiting } = this.state

    const elements = () => {
      return !isWaiting ? (
        <Player {...this.props} />
      ) : (<PlayerLoading />)
    }

    return (
      <div className="player">
        <SoundPlayerContainer
          clientId={CLIENT_ID}
          resolveUrl={this.props.tracks.permalinkUrl}
          onReady={this.trackReady}
        >
          {elements()}
        </SoundPlayerContainer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  }
}

export default connect(
  mapStateToProps
)(PlayerContainer)
