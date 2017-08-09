import { api } from '../services/api'

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS'
export const FETCH_TRACKS_FAILED = 'FETCH_TRACKS_FAILED'
export const UPDATE_TRACKS = 'UPDATE_TRACKS'

const fetchTracksFailed = (message) => ({
  type: FETCH_TRACKS_FAILED,
  message
})

const fetchTracksSuccess = (tracks) => ({
  type: FETCH_TRACKS_SUCCESS,
  tracks
})

export async function fetchTracks(trackId) {
  try {
    let response = await api.fetchTracks(trackId)
    return fetchTracksSuccess(response)
  } catch (e) {
    return fetchTracksFailed(e.message)
  }
}

export async function fetchTracksByUrl(url) {
  try {
    let response = await api.fetchResolve(url)

    if (response.kind !== 'track') {
      return fetchTracksFailed('not support url')
    }

    return fetchTracksSuccess(response)
  } catch (e) {
    return fetchTracksFailed(e.message)
  }
}

export const updateTracks = (tracks) => ({
  type: UPDATE_TRACKS,
  tracks
})
