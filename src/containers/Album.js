import React, { Component } from 'react'
import { connect } from 'react-redux'
import { audioEnded, audioPaused, audioPlaying, audioTimeUpdate } from '../actions/player'
import Player from './Player'
import { Header, Footer, Information, Tracklist } from '../components/Album'
import { timeToSeconds } from '../utils'

class Album extends Component {
  constructor(props) {
    super(props)

    this.initialize()

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.seek = this.seek.bind(this)
  }

  initialize() {
    const { audio } = this.props.soundCloudAudio
    audio.addEventListener('ended', this.props.audioEnded)
    audio.addEventListener('pause', this.props.audioPaused)
    audio.addEventListener('playing', this.props.audioPlaying)
    audio.addEventListener('timeupdate', (evt) => this.props.audioTimeUpdate(this.getTimes(evt)))
    audio.addEventListener('volumeChange', () => {})
  }

  play() {
    this.props.soundCloudAudio.play()
  }

  pause() {
    this.props.soundCloudAudio.pause()
  }

  seek(time) {
    if (/:/.test(time)) {
      time = timeToSeconds(time)
    }

    if (typeof time === 'number') {
      this.props.soundCloudAudio.audio.currentTime = time
      this.play()
    }
  }

  getTimes(evt) {
    const { currentTime, duration } = evt.target

    return {
      currentTime,
      duration
    }
  }

  render() {
    const { track, tracklist } = this.props

    return (
      <div>
        <div className="album">
          <div className="container">
            <Header track={track} />

            <div className="row">
              <div className="columns four">
                <Information
                  track={track}
                />
              </div>
              <div className="columns eight">
                <Tracklist
                  tracklist={tracklist}
                  onClick={this.seek}
                />
                <Footer
                  author={track.label_name || track.user.username}
                  year={(new Date(track.last_modified)).getFullYear()}
                />
              </div>
            </div>
          </div>
        </div>
        <Player
          play={this.play}
          pause={this.pause}
          seek={this.seek}
          track={track}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracklist: state.tracklist
  }
}

export default connect(
  mapStateToProps,
  { audioEnded, audioPaused, audioPlaying, audioTimeUpdate }
)(Album)
