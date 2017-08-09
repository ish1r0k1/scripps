import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ author, year }) => (
  <div className="album__footer">
    <p className="copyright">&copy; {year} {author}</p>
  </div>)

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}

export default Footer
