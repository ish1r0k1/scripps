import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Track from './Track'

class Tracklist extends Component {
  static defaultProps = {
    onClick: () => {}
  }

  static propTypes = {
    tracklist: PropTypes.array.isRequired,
    onClick: PropTypes.func
  }

  render() {
    const { tracklist, onClick } = this.props
    const tracks = tracklist.map((data, key) => {
      return (
        <Track
          key={key}
          trackNumber={key + 1}
          trackTitle={data.title}
          artistName={data.artist}
          startTime={data.startTime}
          className={'tracklist__item'}
          onClick={onClick}
        />)
    })

    return (
      <div className="tracklist">
        {tracks}
      </div>
    )
  }
}

export default Tracklist
