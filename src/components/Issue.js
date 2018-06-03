import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProjectList from './ProjectList'
import Navigation from './Navigation'
import Story from './Story'

const IssueStory = styled.div`
  margin-bottom: 2rem;
  border-top: 2px dashed #ffae63;
  border-bottom: 2px dashed #ffae63;
  font-size: 18px;
  a {
    color: #e65100;
  }
`

const Issue = ({ issue, isLatest }) => {
  return (
    <Fragment>
      <Navigation
        currentNumber={issue.number}
        isLatest={isLatest}
        issue={issue}
      />
      <IssueStory>
        <Story html={issue.story} />
      </IssueStory>
      <ProjectList projects={issue.projects} />
    </Fragment>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

export default Issue
