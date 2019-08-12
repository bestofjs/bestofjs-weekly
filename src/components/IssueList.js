import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'
import IssueDate from './IssueDate'

const cardBorderColor = '#cbcbcb'

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid ${cardBorderColor};
  td {
    background-color: white;
    padding: 0.5rem 1rem;
  }
  tbody td {
    border-top: 1px dashed rgb(203, 203, 203);
  }
`

const IssueList = ({ issues, latestIssueNumber }) => (
  <Table>
    <thead>
      <tr>
        <td>#</td>
        <td>Date</td>
        <td>TOP 3 projects</td>
      </tr>
    </thead>
    <tbody>
      {issues.map(issue => (
        <IssueListItem
          key={issue.number}
          issue={issue}
          isLatest={latestIssueNumber === issue.number}
        />
      ))}
    </tbody>
  </Table>
)

IssueList.propTypes = {
  issues: PropTypes.array.isRequired
}

const IssueListItem = ({ issue }) => {
  const projects = issue.projects || issue.trending
  return (
    <tr>
      <td>{issue.number}</td>
      <td>
        <Link to={`/issues/${issue.number}`} className="link">
          <IssueDate date={issue.date} />
        </Link>
      </td>
      <td>
        {projects
          .slice(0, 3)
          .map(project => project.name)
          .join(', ')}
      </td>
    </tr>
  )
}

export default IssueList
