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
      <Title>Growing Fast This Week</Title>
      <SubTitle>
        By % of GitHub stars added (relative growth) this week
      </SubTitle>
      <ProjectTable
        projects={issue.growing}
        showGrowth={true}
        showDelta={false}
      />
      <Title>Trending This Week</Title>
      <SubTitle>By number of GitHub stars added this week</SubTitle>
      <ProjectTable
        projects={issue.trending}
        showGrowth={false}
        showDelta={true}
      />
    </>
  )
}

const Title = styled.h3`
  margin-bottom: 0;
`

const SubTitle = styled.div`
  font-size: 14px;
  color: #788080;
  margin-bottom: 1rem;
`

Issue.propTypes = {
  issue: PropTypes.object.isRequired
}

export default Issue
