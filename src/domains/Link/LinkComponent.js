import React, { PropTypes } from 'react'

const LinkComponent = ( { text, onClick } ) => (

    <a href="#" onClick={
        e => {
          e.preventDefault()
          onClick()
        }
      }>{text}</a>
)

LinkComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LinkComponent
