import React from 'react'
import Counter from '../containers/Counter'
// import PlayerContainer from '../containers/PlayerContainer'
import { Link } from 'react-router'

const HomePage = () => (
  <div className="home">
    <div className="container">
      <h1>scripps</h1>
      <p>SoundCloudに上げた音源にトラックリストを紐付けて簡易告知ページを作成</p>
      <Link className="button button-primary" to="/registration">Create</Link>
    </div>
  </div>
)

export default HomePage
