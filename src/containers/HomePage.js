import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'

import IssueList from '../components/IssueList'
import Issue from '../components/Issue'
import Subscribe from '../components/Subscribe'
import Divider from '../components/Divider'

const Title1 = styled.h1`
  margin: 1rem 0 2rem;
`

const Title2 = styled.h2`
  margin-top: 0;
`

const HomePage = ({ issues }) => {
  const latestIssue = issues[0]
  return (
    <div>
      <Title1>Best of JavaScript Weekly Rankings</Title1>
      <Subscribe />
      <Divider />
      <Issue issue={latestIssue} isLatest={true} />
      <Divider />
      <Title2>All issues</Title2>
      <IssueList issues={issues} />
    </div>
  )
}

export default withRouteData(HomePage)
