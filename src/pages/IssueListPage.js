import React from 'react'
import { withRouteData, Link } from 'react-static'
import IssueList from '../components/IssueList'

const IssuesPage = ({ issues, latestIssueNumber }) => {
  return (
    <div>
      <h1>All issues</h1>
      <IssueList issues={issues} latestIssueNumber={latestIssueNumber} />
    </div>
  )
}

export default withRouteData(IssuesPage)
