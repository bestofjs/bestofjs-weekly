import got from 'got'

import fetchRankings from './fetch-rankings'

async function fetchAllProjectsAndTags() {
  const url = 'https://bestofjs-api-v3.firebaseapp.com/projects.json'
  const response = await got(url, { json: true })
  return response.body
}

const populate = ({ tags }) => issue => {
  const { projects, trending, growing } = issue
  return {
    ...issue,
    projects: projects ? projects.map(populateProject({ tags })) : null,
    trending: trending ? trending.map(populateProject({ tags })) : null,
    growing: growing ? growing.map(populateProject({ tags })) : null
  }
}

const populateProject = ({ tags }) => project => {
  const findByCode = code => tags.find(tag => tag.code === code)

  return {
    ...project,
    tags: project.tags.map(findByCode)
  }
}

export default async function fetchAndPopulate() {
  const newsletters = await fetchRankings()
  const { tags } = await fetchAllProjectsAndTags()
  return newsletters.map(populate({ tags }))
}
