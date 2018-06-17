import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import styled from 'styled-components'

import IssueDate from './IssueDate'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;
`
Container.Main = styled.div`
  flex-grow: 1;
`
const Title = styled.h2`
  margin: 0;
  text-align: center;
`

const Navigation = ({ issue, currentNumber, isLatest }) => {
  const firstIssueNumber = 1
  const previousNumber = currentNumber - 1
  const nextNumber = currentNumber + 1
  return (
    <Container>
      {currentNumber > firstIssueNumber && (
        <Link to={`/issues/${previousNumber}`} className="link">
          &laquo; Previous
        </Link>
      )}
      <Container.Main>
        <Title>
          Issue #{issue.number} (<IssueDate date={issue.date} />)
        </Title>
      </Container.Main>
      {!isLatest && (
        <Link to={`/issues/${nextNumber}`} className="link">
          Next &raquo;
        </Link>
      )}
    </Container>
  )
}

Navigation.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  isLatest: PropTypes.bool.isRequired
}

export default Navigation
