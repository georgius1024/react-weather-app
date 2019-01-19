/* eslint-disable */
import React from 'react'
import './footer.css'
export default props => {
  return (
    <footer className="footer">
      <div className="content is-small">
        <a
          href={props.config.contactUrl}
          target="_blank"
          className="has-text-white"
        >
          {props.config.copyright}
        </a>
      </div>
    </footer>
  )
}
