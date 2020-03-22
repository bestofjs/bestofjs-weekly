import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Story = ({ html }) => {
  return <Container dangerouslySetInnerHTML={{ __html: html }} />
}

Story.propTypes = {
  html: PropTypes.string.isRequired
}

const Container = styled.div`
  blockquote {
    margin-left: 0;
    padding: 0 1em;
    color: #541600;
    border-left: 0.25em solid #fa9e59;
  }
  pre {
    background-color: white;
    padding: 1em;
  }
`

export default Story
