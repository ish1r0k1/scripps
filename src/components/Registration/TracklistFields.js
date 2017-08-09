import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TracklistFields extends Component {
  static propTypes = {
    createAlbum: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      tracks: []
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrackByKey = this.removeTrackByKey.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.insertDemoTracks = this.insertDemoTracks.bind(this)
  }

  insertDemoTracks() {
    const demoTracks = [
      { artist: 'Bernis', title: 'Kasumi', startTime: '0:00' },
      { artist: 'Astrion', title: 'Reach the Paradise', startTime: '1:44'},
      { artist: 'Nishikushi', title: 'Alpha Hydrae', startTime: '3:08' },
      { artist: 'Spawn', title: 'Tranquility', startTime: '4:16' },
      { artist: 'JK18', title: 'Litchi', startTime: '5:44' },
      { artist: 'Nago', title: 'Arise', startTime: '7:10' },
      { artist: 'Blue Twinkle', title: 'Lucifer', startTime: '8:44' },
      { artist: 'Hiroki Nagamine', title: 'If You Remember Me', startTime: '10:55' },
    ]

    this.setState({
      tracks: demoTracks
    })
  }

  addTrack(evt) {
    evt.preventDefault()

    const tracks = this.state.tracks

    const artist = this.refs.artist.value
    const title = this.refs.title.value
    const startTime = this.refs.startTime.value

    if (!title.length) return
    if (!/[0-9]+:[0-9]{2,2}/.exec(startTime)) return

    tracks.push({ artist, title, startTime })

    this.setState({ tracks })
  }

  removeTrackByKey(key) {
    const tracks = this.state.tracks

    tracks.splice(key, 1)

    this.setState({ tracks })
  }

  handleDone(evt) {
    evt.preventDefault()

    if (!this.state.tracks.length) return

    this.props.createAlbum(this.state.tracks)
  }

  render() {
    const inputRows = this.state.tracks.map((track, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{track.artist}</td>
          <td>{track.title}</td>
          <td>{track.startTime}</td>
          <td><a onClick={(evt) => {
            evt.preventDefault()
            this.removeTrackByKey(index)
          }}>×</a></td>
        </tr>
      )
    })

    return (
      <div>
        <form onSubmit={this.addTrack.bind(this)}>
          <div className="row">
            <div className="columns five">
              <label>Artist</label>
              <input className="u-full-width" ref="artist" type="text" />
            </div>
            <div className="columns five">
              <label>Title</label>
              <input className="u-full-width" ref="title" type="text" />
            </div>
            <div className="columns two">
              <label>Star time</label>
              <input placeholder="1:00" className="u-full-width" ref="startTime" type="text" />
            </div>
          </div>
          <input type="submit" value="Add" className="button-primary"/> <button onClick={this.insertDemoTracks}>Insert demo tracks</button>
        </form>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>#</th>
              <th>Artist</th>
              <th>Title</th>
              <th>Start time</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {inputRows}
          </tbody>
        </table>
        <button onClick={this.handleDone} className="button-primary">Done</button>
      </div>
    )
  }
}

export default TracklistFields
