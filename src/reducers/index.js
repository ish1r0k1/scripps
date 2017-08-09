import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'
import tracks from './tracks'
import tracklist from './tracklist'
import player from './player'
import message from './message'

const rootReducer = combineReducers({
  counter,
  tracks,
  tracklist,
  player,
  message,
  routing
})

export default rootReducer
