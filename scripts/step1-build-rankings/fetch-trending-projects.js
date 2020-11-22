const got = require('got')
const { orderBy } = require('lodash')

const excluded = ['sindresorhus/awesome']

function fetchAllProjects() {
  const url = 'https://bestofjs-static-api.now.sh/projects.json'
  return got(url, { json: true })
    .then((r) => r.body)
    .then((json) =>
      json.projects.filter((project) => !excluded.includes(project.full_name))
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
    trending: byStarsAdded,
    growing: byRelativeGrowth,
    latest: allProjects.filter(
      (project) => project.trends.weekly === undefined
    ),
  }
}

function getProjectsByStarAdded(projects) {
  return orderBy(
    projects.filter((project) => project.trends.weekly !== undefined),
    'trends.weekly',
    'desc'
  )
}

function getProjectsByRelativeGrowth(projects) {
  return orderBy(
    projects
      .filter((project) => project.trends.weekly !== undefined)
      .filter((project) => project.trends.weekly > 50),
    getWeeklyRelativeGrowth,
    'desc'
  )
}

export function getWeeklyRelativeGrowth(project) {
  const { trends, stars } = project
  const delta = trends.weekly
  return delta / (stars - delta)
}
