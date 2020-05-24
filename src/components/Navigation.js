import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import styled from 'styled-components'

import IssueDate from './IssueDate'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

const breakPoint = 600

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 2rem;
`
Container.Main = styled.div`
  flex-grow: 1;
`
const Title = styled.h2`
  margin: 0;
  text-align: center;
`
const Button = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #cecece;
  color: #cc4700;
  background-color: white;
  text-align: center;
  border-radius: 4px;
  padding: 8px 12px;
`
const Text = styled.div`
  @media (max-width: ${breakPoint - 1}px) {
    display: none;
  }
`

const Navigation = ({ issue, currentNumber, isLatest }) => {
  const firstIssueNumber = 1
  const previousNumber = currentNumber - 1
  const nextNumber = currentNumber + 1
  return (
    <Container>
      {currentNumber > firstIssueNumber && (
        <Button to={`/issues/${previousNumber}`} className="link">
          <ChevronLeftIcon />
        </Button>
      )}
      <Container.Main>
        <Title>
          Issue #{issue.number}{' '}
          <span className="hidden-sm">
            (<IssueDate date={issue.date} />)
          </span>
        </Title>
      </Container.Main>
      {!isLatest && (
        <Button to={`/issues/${nextNumber}`} className="link">
          <ChevronRightIcon />
        </Button>
      )}
    </Container>
  )
}

Navigation.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  isLatest: PropTypes.bool.isRequired,
}

export default Navigation
