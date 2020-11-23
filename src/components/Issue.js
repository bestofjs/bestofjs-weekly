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
      <IssueRankings issue={issue} />
    </Fragment>
  )
}

const IssueRankings = ({ issue }) => {
  if (issue.latest) {
    return <RankingsV3 issue={issue} />
  }
  if (issue.growing) {
    return <RankingsV2 issue={issue} />
  }
  return <RankingsV1 issue={issue} />
}

const RankingsV1 = ({ issue }) => {
  return <ProjectList showIndex projects={issue.projects} />
}

const RankingsV2 = ({ issue }) => {
  return (
    <>
      <ByRelativeGrowth issue={issue} />
      <ByStarsAdded issue={issue} />
    </>
  )
}

const RankingsV3 = ({ issue }) => {
  return (
    <>
      <ByRelativeGrowth issue={issue} />
      <LatestAdditions issue={issue} />
      <ByStarsAdded issue={issue} />
    </>
  )
}

const ByStarsAdded = ({ issue }) => {
  return (
    <>
      <Title>Trending This Week</Title>
      <SubTitle>By number of GitHub stars added this week</SubTitle>
      <ProjectTable
        projects={issue.trending}
        showIndex
        showGrowth={false}
        showDelta={true}
      />
    </>
  )
}

const ByRelativeGrowth = ({ issue }) => {
  return (
    <>
      <Title>Growing Fast This Week</Title>
      <SubTitle>
        By % of GitHub stars added (relative growth) this week
      </SubTitle>
      <ProjectTable
        projects={issue.growing}
        showIndex
        showGrowth={true}
        showDelta={false}
      />
    </>
  )
}

const LatestAdditions = ({ issue }) => {
  return (
    <>
      <Title>
        New Faces on <i>Best of JS</i>
      </Title>
      <SubTitle>Projects recently added on Best of JS</SubTitle>
      <ProjectTable
        projects={issue.latest}
        showIndex={false}
        showGrowth={false}
        showDelta={false}
        showTotal={true}
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
  issue: PropTypes.object.isRequired,
}

export default Issue
