export const AUDIO_ENDED = 'AUDIO_ENDED'
export const AUDIO_PAUSED = 'AUDIO_PAUSED'
export const AUDIO_PLAYING = 'AUDIO_PLAYING'
export const AUDIO_TIME_UPDATED = 'AUDIO_TIME_UPDATED'
export const AUDIO_VOLUME_CHANGED = 'AUDIO_VOLUME_CHANGED'

export const audioEnded = () => ({
  type: AUDIO_ENDED
})

export const audioPaused = () => ({
  type: AUDIO_PAUSED
})

export const audioPlaying = () => ({
  type: AUDIO_PLAYING
})

export const audioTimeUpdate = (times) => ({
  type: AUDIO_TIME_UPDATED,
  times
})
