import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from './Avatar'
import StarDelta from './StarDelta'
import TagLabel from './TagLabel'
import Description from './Description'
import GrowthScore from './GrowthScore'
import { getUrl } from '../utils/project-helpers'

const ProjectTable = ({ projects, ...otherProps }) => {
  return (
    <Table>
      <tbody>
        {projects.map((project, index) => (
          <ProjectTableRow
            key={project.full_name}
            project={project}
            index={index}
            {...otherProps}
          />
        ))}
      </tbody>
    </Table>
  )
}
ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired,
}

const ProjectTableRow = ({ project, index, showDelta, showGrowth }) => {
  const url = getUrl(project)
  const buttonLabel = url.startsWith('https://github.com/')
    ? 'GitHub'
    : 'Homepage'

  return (
    <Row>
      <RankingCell>
        <ProjectRankingNumber>{index + 1}</ProjectRankingNumber>
      </RankingCell>

      <IconCell>
        <Avatar project={project} size={50} />
      </IconCell>

      <MainCell>
        <ProjectName>{project.name}</ProjectName>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLink>
          <Link href={url}>{buttonLabel}</Link>
        </ProjectLink>
      </MainCell>

      <ButtonCell>
        <Link href={url}>{buttonLabel}</Link>
      </ButtonCell>

      <LastCell>
        {showDelta && (
          <StarDelta value={project.weekly || project.trends.weekly} />
        )}
        {showGrowth && <GrowthScore project={project} />}
      </LastCell>
    </Row>
  )
}

const breakPoint = 500

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
`

const Row = styled.tr`
  td {
    border-top: 1px dashed #cecece;
  }
  &:last-child td {
    border-bottom: 1px dashed #cecece;
  }
`

const Cell = styled.td`
  height: 50px;
  padding: 8px 0;
  background-color: white;
`

const ProjectRankingNumber = styled.div`
  width: 50px;
  font-size: 24px;
  text-align: center;
  color: #788080;
`

const RankingCell = styled(Cell)`
  @media (max-width: ${breakPoint - 1}px) {
    display: none;
  }
`

const IconCell = styled(Cell)`
  width: 50px;
`

const MainCell = styled(Cell)`
  padding: 1rem;
`

const ProjectLink = styled.div`
  margin-top: 0.5rem;
  @media (min-width: ${breakPoint}px) {
    display: none;
  }
  a {
    width: 100%;
    display: block;
  }
`

const ButtonCell = styled(Cell)`
  @media (max-width: ${breakPoint}px) {
    display: none;
  }
`

const LastCell = styled(Cell)`
  padding: 8px;
  width: 80px;
`

const ProjectName = styled.div`
  font-size: 16px;
`

const ProjectDescription = styled.span`
  font-size: 14px;
  color: #788080;
`

const Link = styled.a`
  margin-right: 8px;
  border: 1px solid #cecece;
  color: #cc4700;
  text-align: center;
  border-radius: 3px;
  padding: 8px;
  font-size: 14px;
  &:hover {
    color: #ff5900;
    background-color: white;
  }
`

export default ProjectTable
