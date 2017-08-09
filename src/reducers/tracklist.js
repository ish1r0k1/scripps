import {
  UPDATE_TRACKLIST
} from '../actions/tracklist'

export default function tracklist(state = [
// {
//   // artist: 'Spawn',
//   title: 'Dreamliner',
//   startTime: '0:00'
// }, {
//   artist: 'Amutik',
//   title: 'Call From Seabed',
//   startTime: '1:14'
// }, {
//   artist: 'Clion',
//   title: 'Alter',
//   startTime: '2:25'
// }, {
//   artist: 'Spawn',
//   title: 'Cumulus',
//   startTime: '3:32'
// }, {
//   artist: 'Amutik',
//   title: 'Sludge',
//   startTime: '4:43'
// }, {
//   artist: 'Spawn',
//   title: 'Forgive Me',
//   startTime: '5:50'
// }, {
//   artist: 'Spawn',
//   title: 'Nova Prime',
//   startTime: '6:58'
// }, {
//   artist: 'Clion',
//   title: 'Palms',
//   startTime: '8:06'
// }
], action) {
  switch (action.type) {
    case UPDATE_TRACKLIST:
      return action.tracks

    default:
      return state
  }
}
