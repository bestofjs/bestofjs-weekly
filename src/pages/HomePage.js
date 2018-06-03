import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'

import IssueList from '../components/IssueList'
import Issue from '../components/Issue'
import Subscribe from '../components/Subscribe'

const Title = styled.h1`
  margin: 0 0 1rem;
`

const HomePage = ({ issues }) => {
  const latestIssue = issues[0]
  return (
    <div>
      <Title>Best of JavaScript Weekly Rankings</Title>
      <Subscribe />
      <Issue issue={latestIssue} isLatest={true} />
      <h2>All issues</h2>
      <IssueList issues={issues} />
    </div>
  )
}

export default withRouteData(HomePage)
