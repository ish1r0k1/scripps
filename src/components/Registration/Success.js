import React from 'react'
import PropTypes from 'prop-types'
import { compressString } from '../../utils'
import { Link } from 'react-router'

const Success = ({ tracks, tracklist }) => {
  const jsonStr = JSON.stringify({ tracks, tracklist })
  const id = compressString(jsonStr)

  return(
    <div>
      <p>
        アルバムの作成が完了しました。
      </p>
      <Link className="button" to={`/albums/${id}`}>See page</Link>
    </div>
  )
}

Success.propTypes = {
  tracks: PropTypes.object.isRequired,
  tracklist: PropTypes.array.isRequired,
}

export default Success
