import React from 'react'
import PropTypes from 'prop-types'

const Story = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

Story.propTypes = {
  html: PropTypes.string.isRequired
}

export default Story
