import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProjectCard from './ProjectCard'

const gutter = '2rem'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${gutter} 0 0 -${gutter};
  @media (max-width: 700px) {
    flex-direction: column;
  }
  > * {
    flex: 0 0 50%;
    padding: ${gutter} 0 0 ${gutter};
    display: flex;
  }
`

const ProjectList = ({ projects }) => {
  return (
    <Grid>
      {projects.map(project => (
        <div key={project.full_name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </Grid>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectList
