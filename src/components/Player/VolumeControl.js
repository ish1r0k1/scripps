import React from 'react'

const VolumeControl = () => (
  <div className="volume">
    <button className="volume__button button--icon">
      <span className="icon-volume-down"></span>
    </button>
    <div className="volume__slider-wrapper">
      <div className="volume__slider-background"></div>
      <div className="volume__slider-progress"></div>
      <div className="volume__slider-handle"></div>
    </div>
  </div>
)

export default VolumeControl
