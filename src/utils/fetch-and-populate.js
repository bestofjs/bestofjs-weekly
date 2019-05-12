import got from 'got'

import fetchRankings from './fetch-rankings'

async function fetchAllProjectsAndTags() {
  const url = 'https://bestofjs-api-v2.firebaseapp.com/projects.json'
  const response = await got(url, { json: true })
  return response.body
}

const populate = ({ tags }) => newsletter => {
  const findByCode = code => tags.find(tag => tag.code === code)
  const projects = newsletter.projects.map(project => ({
    ...project,
    tags: project.tags.map(findByCode)
  }))
  return { ...newsletter, projects }
}

export default async function fetchAndPopulate() {
  const newsletters = await fetchRankings()
  const { tags } = await fetchAllProjectsAndTags()
  return newsletters.map(populate({ tags }))
}
