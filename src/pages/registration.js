import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTracksByUrl } from '../actions/tracks'
import { updateTracklist } from '../actions/tracklist'
import {
  SoundCloudFields,
  TracklistFields,
  Success
} from '../components/Registration'

class RegistrationPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1
    }
  }

  checkTrackUrl(url) {
    if (!url.length) return

    this.props.fetchTracksByUrl(url)
  }

  prevStep() {
    this.setState({
      step: this.state.step - 1
    })
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tracks.permalinkUrl === null && this.props.tracks.permalinkUrl) {
      this.nextStep()
    }

    if (!prevProps.tracklist.length && this.props.tracklist.length) {
      this.nextStep()
    }
  }

  render() {
    const element = () => {
      switch (this.state.step) {
        case 1:
          return <SoundCloudFields
            checkTrackUrl={this.checkTrackUrl.bind(this)}
          />
        case 2:
          return <TracklistFields
            createAlbum={this.props.updateTracklist}
          />
        case 3:
          return <Success
            tracks={this.props.tracks}
            tracklist={this.props.tracklist}
          />
      }
    }

    return (
      <div className="registratiom">
        <div className="container">
          <h1>Create new album</h1>
          {element()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    tracklist: state.tracklist
  }
}

export default connect(
  mapStateToProps,
  { fetchTracksByUrl, updateTracklist }
)(RegistrationPage)
