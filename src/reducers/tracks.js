import {
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILED,
  UPDATE_TRACKS,
  fetchTracksByUrl
} from '../actions/tracks'

export default function tracks(state = {
  permalinkUrl: null
  // artworkUrl: 'https://i1.sndcdn.com/artworks-000192444803-5uo9pr-t500x500.jpg',
  // duration: null,
  // id: 291883938,
  // streamUrl: 'https://api.soundcloud.com/tracks/291883938/stream',
  // permalinkUrl: 'https://soundcloud.com/shattermindrec/shattermind-2nd-album-subconscious-mind-xfd',
  // title: 'Celaeno - GuZheng',
  // username: 'terrorhythm'
}, action) {
  let { tracks } = action

  switch (action.type) {
    case UPDATE_TRACKS:
      return Object.assign({}, state, tracks)

    case FETCH_TRACKS_SUCCESS:
      return Object.assign({}, state, {
        permalinkUrl: tracks.permalink_url
      })
    default:
      return state
  }
}
