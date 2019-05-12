import got from 'got'

import fetchRankings from './fetch-rankings'

function fetchAllProjectsAndTags() {
  const url = 'https://bestofjs-api-v2.firebaseapp.com/projects.json'
  return got(url, { json: true }).then(r => r.body)
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
  console.log('Fetch rankings')
  const newsletters = await fetchRankings()
  console.log('Fetcg projects and tags')
  const { tags } = await fetchAllProjectsAndTags()
  return newsletters.map(populate({ tags }))
}
