import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <p>
        Any question or feedback? Reach us on{' '}
        <a className="link" href="https://github.com/bestofjs/bestofjs-weekly">
          GitHub
        </a>
        .
      </p>
      <p>
        <a className="link" href="https://bestofjs.org">
          Best of JavaScript
        </a>{' '}
        is a project created by Michael Rambeau, in Osaka, Japan.
      </p>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 2px dashed #ffae63;
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default Footer
