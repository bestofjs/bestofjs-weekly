const got = require('got')
const { orderBy } = require('lodash')

function fetchAllProjects() {
  const url = 'https://bestofjs-api-v3.firebaseapp.com/projects.json'
  return got(url, { json: true })
    .then(r => r.body)
    .then(json =>
      json.projects.filter(project => project.trends.weekly !== undefined)
    )
}

export default async function fetchTrendingProjects({ count } = { count: 10 }) {
  const allProjects = await fetchAllProjects()
  console.log('Project found', allProjects.length)
  const byStarsAdded = getProjectsByStarAdded(allProjects).slice(0, count)
  const byRelativeGrowth = getProjectsByRelativeGrowth(allProjects).slice(
    0,
    count
  )
  return {
    projects: byStarsAdded,
    growing: byRelativeGrowth
  }
}

function getProjectsByStarAdded(projects) {
  return orderBy(projects.slice(0), 'trends.weekly', 'desc')
}

function getProjectsByRelativeGrowth(projects) {
  return orderBy(projects, [getWeeklyRelativeGrowth], ['desc'])
}

function getWeeklyRelativeGrowth(project) {
  const { trends, stars } = project
  const delta = trends.weekly
  return delta / (stars - delta)
}
