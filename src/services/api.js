import request from 'superagent'
import { CLIENT_ID_PARAM, API_RESOLVE_URL } from '../constants'
import { serialize } from '../utils'

export const api = {
  fetch(url) {
    return dispatch({url})
  },

  fetchResolve(url) {
    return dispatch({
      url: `${API_RESOLVE_URL}`,
      query: { url }
    })
  }
}

export function dispatch (options) {
  return request[options.method || 'get'](requestUrl(options))
    .set('Accept', 'application/json')
    .then(res => res.body)
}

export function requestUrl({url, query}) {
  let params = []

  if (!url.includes(CLIENT_ID_PARAM)) params.push(CLIENT_ID_PARAM)
  if (query) params.push(serialize(query))

  if (params.length) {
    url += url.indexOf('?') === -1 ? '?' : '&'
    url += params.join('&')
  }

  return url
}
