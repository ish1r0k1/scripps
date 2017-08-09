import {
  AUDIO_ENDED,
  AUDIO_PAUSED,
  AUDIO_PLAYING,
  AUDIO_TIME_UPDATED,
  AUDIO_VOLUME_CHANGED
} from '../actions/player'

export default function player(state = {
  currentTime: 0,
  duration: 0,
  playing: false
}, action) {
  switch (action.type) {
    case AUDIO_ENDED:
      return Object.assign({}, state, {
        duration: 0,
        currentTime: 0,
        playing: false
      })

    case AUDIO_PAUSED:
      return Object.assign({}, state, {playing: false})

    case AUDIO_PLAYING:
      return Object.assign({}, state, {playing: true})

    case AUDIO_TIME_UPDATED:
      return Object.assign({}, state, action.times)

    default:
      return state
  }
}
