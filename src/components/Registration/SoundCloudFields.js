import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SoundCloudFields extends Component {
  static propTypes = {
    checkTrackUrl: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = { url: '' }
  }

  insertDemoUrl() {
    this.setState({ url: 'https://soundcloud.com/digital_logics/riserising' })
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({url: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()

    const { url } = this.state

    this.props.checkTrackUrl(url)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>SoundCloud URL:</label>
          <input type="text" value={this.state.url} onChange={this.handleChange.bind(this)} /> <input type="submit" value="Next"/>
          <div>
            <button onClick={this.insertDemoUrl.bind(this)}>Insert demo url</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SoundCloudFields
