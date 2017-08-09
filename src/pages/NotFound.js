import React from 'react'
import Counter from '../containers/Counter'
import { Link } from 'react-router'

const NotFoundPage = () => (
  <div className="notfound">
    <div className="container">
      <h1>Error</h1>
      <p>アルバムが見つかりませんでした。</p>
      <Link className="button button-primary" to="/">Back to home</Link>
    </div>
  </div>
)

export default NotFoundPage
