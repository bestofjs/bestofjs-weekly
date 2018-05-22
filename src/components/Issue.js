import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import IssueDate from './IssueDate'
import ProjectList from './ProjectList'

const Issue = ({ issue, isLatest }) => {
  return (
    <Fragment>
      <h3>
        <IssueDate date={issue.date} />{' '}
        {isLatest && <span>(latest issue)</span>}
      </h3>
      <ProjectList projects={issue.projects} />
    </Fragment>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

export default Issue
