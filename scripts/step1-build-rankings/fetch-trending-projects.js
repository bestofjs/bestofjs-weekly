const got = require('got')

import sortProjects from '../utils/sort-projects'

function fetchAllProjects() {
  const url = 'https://bestofjs-api-v3.firebaseapp.com/projects.json'
  return got(url, { json: true })
    .then(r => r.body)
    .then(json => json.projects)
}

export default function fetchTrendingProjects({ count } = { count: 10 }) {
  return fetchAllProjects().then(projects =>
    sortProjects(projects).slice(0, count)
  )
}
