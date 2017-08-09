import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { CLIENT_ID } from '../constants'
import Loading from '../components/Loading'
import Album from '../containers/Album'
import { updateTracklist } from '../actions/tracklist'
import { updateTracks } from '../actions/tracks'
import { decompressString } from '../utils'

class AlbumPage extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = { isWaiting: true }
  }

  componentDidMount() {
    const { params: { id } } = this.props
    let json

    try {
      json = JSON.parse(decompressString(id))
    } catch(err) {
      hashHistory.push('/not_found')
    } finally {
      const { tracks, tracklist } = json
      this.props.updateTracks(tracks)
      this.props.updateTracklist(tracklist)
    }
  }

  trackReady() {
    this.setState({ isWaiting: false })
  }

  render() {
    const { isWaiting } = this.state
    const { tracks } = this.props

    const elements = () => {
      return !isWaiting ? (
        <Album {...this.props} />
      ) : (<Loading />)
    }

    return (
      tracks.permalinkUrl ?
        <SoundPlayerContainer
          clientId={CLIENT_ID}
          resolveUrl={tracks.permalinkUrl}
          onReady={this.trackReady.bind(this)}
        >
          {elements()}
        </SoundPlayerContainer>
      : null
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  }
}

export default connect(
  mapStateToProps,
  { updateTracks, updateTracklist }
)(AlbumPage)
