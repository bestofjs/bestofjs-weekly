import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import styled from 'styled-components'

import IssueDate from './IssueDate'

const breakPoint = 600

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
const Button = styled(Link)`
  display: flex;
  align-items: center;
`
const Arrow = styled.div`
  @media (max-width: ${breakPoint - 1}px) {
    font-size: 3rem;
  }
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
          <Arrow>&laquo;&nbsp;</Arrow>
          <Text>Previous</Text>
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
          <Text>Next </Text>
          <Arrow>&nbsp;&raquo;</Arrow>
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
