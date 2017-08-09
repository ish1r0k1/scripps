import {
  DISMISS_MESSAGE,
} from '../actions/message'

import {
  FETCH_TRACKS_FAILED,
} from '../actions/tracks'

export default function message(state = {
  message: ''
}, action = {}) {
  switch (action.type) {
    case FETCH_TRACKS_FAILED:
      return {...state, message: action.message}

    case DISMISS_MESSAGE:
      return {...state, message: ''}

    default:
      return state
  }
}
