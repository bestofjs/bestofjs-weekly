import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import IssueDate from './IssueDate'
import ProjectList from './ProjectList'
import Navigation from './Navigation'

const Issue = ({ issue, isLatest }) => {
  return (
    <Fragment>
      <Navigation
        currentNumber={issue.number}
        isLatest={isLatest}
        issue={issue}
      />
      {false && (
        <h3>
          {isLatest ? (
            <span>
              Latest issue (<IssueDate date={issue.date} />)
            </span>
          ) : (
            <text>
              Issue #{issue.number} (<IssueDate date={issue.date} />)
            </text>
          )}
        </h3>
      )}
      <ProjectList projects={issue.projects} />
    </Fragment>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

export default Issue
