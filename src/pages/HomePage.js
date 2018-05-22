import React from 'react'
import { withRouteData, Link } from 'react-static'

import IssueList from '../components/IssueList'
import Issue from '../components/Issue'
import Subscribe from '../components/Subscribe'

const HomePage = ({ issues }) => {
  const latestIssue = issues[issues.length - 1]
  return (
    <div>
      <h1>Best of JavaScript Weekly Rankings</h1>
      <Subscribe />
      <Issue issue={latestIssue} isLatest={true} />
      <h2>All issues</h2>
      <IssueList issues={issues} />
    </div>
  )
}

export default withRouteData(HomePage)
