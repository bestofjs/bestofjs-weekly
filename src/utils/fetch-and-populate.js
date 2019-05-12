import got from 'got'

import fetchRankings from './fetch-rankings'

async function fetchAllProjectsAndTags() {
  const url = 'https://bestofjs-api-v2.firebaseapp.com/projects.json'
  console.log('Fetching...')
  const response = await got(url, { json: true })
  console.log('We got a response')
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
  console.log('Fetch rankings')
  const newsletters = await fetchRankings()
  console.log('Fetch projects and tags')
  const { tags } = await fetchAllProjectsAndTags()
  console.log('Populate', tags.length)
  return newsletters.map(populate({ tags }))
}
