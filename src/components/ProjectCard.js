import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from './Avatar'
import StarDelta from './StarDelta'
import TagLabel from './TagLabel'
import Description from './Description'

const cardBorderColor = '#cbcbcb'

const Card = styled.div`
  background-color: white;
  border: 1px solid ${cardBorderColor};
  flex: 1;
`

Card.Header = styled.a`
  display: flex;
  align-items: center;
  :hover {
    background-color: #fff7eb;
  }
`

const Title = styled.div`
  flex-grow: 1;
  text-align: center;
`

const Score = styled.div`
  padding-right: 1rem;
`

Card.Description = styled.div`
  border-top: 1px dashed rgb(203, 203, 203);
  padding: 1rem;
`

Card.Tags = styled.div`
  border-top: 1px dashed rgb(203, 203, 203);
  padding: 1rem;
`

function getUrl(project) {
  return project.url ? project.url : `https://github.com/${project.full_name}`
}

const ProjectCard = ({ project }) => {
  const url = getUrl(project)
  return (
    <Card>
      <Card.Header href={url}>
        <Avatar project={project} size={75} />
        <Title>{project.name}</Title>
        <Score>
          <StarDelta value={project.weekly} />
        </Score>
      </Card.Header>
      <Card.Description>
        <Description text={project.description} />
      </Card.Description>
      <Card.Tags>
        {project.tags.map(tag => <TagLabel key={tag.code} tag={tag} />)}
      </Card.Tags>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired
  }).isRequired
}

export default ProjectCard
