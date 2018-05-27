import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import IssueDate from './IssueDate'
import ProjectList from './ProjectList'

const Issue = ({ issue, isLatest }) => {
  return (
    <Fragment>
      <h3>
        {isLatest ? (
          <span>
            Latest issue (<IssueDate date={issue.date} />)
          </span>
        ) : (
          <IssueDate date={issue.date} />
        )}
      </h3>
      <ProjectList projects={issue.projects} />
    </Fragment>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

export default Issue
