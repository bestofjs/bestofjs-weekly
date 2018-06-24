const got = require('got')

const sortProjects = require('../utils/sort-projects')

function fetchAllProjects() {
  const url = 'https://bestofjs-api-v2.firebaseapp.com/projects.json'
  return got(url, { json: true })
    .then(r => r.body)
    .then(json => json.projects)
}

function fetchTrendingProjects({ count } = { count: 10 }) {
  return fetchAllProjects().then(
    projects => sortProjects(projects).slice(0, count)
    // .map(project => ({ name: project.name, weekly: project.weekly }))
  )
}

module.exports = fetchTrendingProjects
