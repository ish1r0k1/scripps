import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classNames/bind'

class Track extends Component {
  static defaultProps = {
    className: 'track',
    onClick: () => {}
  }

  static propTypes = {
    trackNumber: PropTypes.number.isRequired,
    trackTitle: PropTypes.string.isRequired,
    artistName: PropTypes.string,
    startTime: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = { isHover: false }
  }

  handleMouseEnter() {
    this.setState({ isHover: true })
  }

  handleMouseLeave() {
    this.setState({ isHover: false })
  }

  handleClick() {
    const { startTime, onClick } = this.props

    onClick(startTime)
  }

  render() {
    const onelineClass = `${this.props.className}--oneline`

    return (
      <div className={classNames(this.props.className, 'row', {
        [`${this.props.className}--oneline`]: !this.props.artistName
      })}
        onClick={this.handleClick.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <div className="columns one">
          <div
            className={classNames('trackNumber', {
              'top-align': this.props.artistName,
              'middle-align': !this.props.artistName
            })}
            style={{ display: this.state.isHover ? 'none' : 'block' }}
          >{this.props.trackNumber}.</div>
          <div
            className={classNames('icon-play', {
              'top-align': this.props.artistName,
              'middle-align': !this.props.artistName
            })}
            style={{ display: this.state.isHover ? 'block' : 'none' }}
          / >
        </div>
        <div className="columns nine">
          <div className={classNames({
            'top-align': this.props.artistName,
            'middle-align': !this.props.artistName
          })}>
            <div className="trackTitle">{this.props.trackTitle}</div>
            <div className="artistName">{this.props.artistName}</div>
          </div>
        </div>
        <div className="columns two">
          <div className={classNames('seekTime', {
            'top-align': this.props.artistName,
            'middle-align': !this.props.artistName
          })}>{this.props.startTime}</div>
        </div>
      </div>
    )
  }
}

export default Track
