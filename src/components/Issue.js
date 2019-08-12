import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProjectList from './ProjectList'
import Navigation from './Navigation'
import Story from './Story'
import ProjectTable from './ProjectTable'

const IssueStory = styled.div`
  margin-bottom: 2rem;
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
      {issue.growing ? (
        <RankingsV2 issue={issue} />
      ) : (
        <RankingsV1 issue={issue} />
      )}
    </Fragment>
  )
}

const RankingsV1 = ({ issue }) => {
  return <ProjectList projects={issue.projects} />
}

const RankingsV2 = ({ issue }) => {
  return (
    <>
      <h3>Growing Fast This Week</h3>
      <ProjectTable
        projects={issue.growing}
        showGrowth={true}
        showDelta={false}
      />
      <h3>Trending This Week</h3>
      <ProjectTable
        projects={issue.projects}
        showGrowth={false}
        showDelta={true}
      />
    </>
  )
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

export default Issue
