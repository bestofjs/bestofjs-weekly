import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 2px dashed #ffae63;
`

const Footer = () => {
  return (
    <Div>
      <a className="link" href="https://bestof.js.org">
        Best of JavaScript
      </a>{' '}
      is a project created by Michael Rambeau, in Osaka, Japan.
    </Div>
  )
}

export default Footer
