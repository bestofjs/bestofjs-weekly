function getWeeklyScore(project) {
  return project.trends.weekly
}

function sortProjects(projects) {
  const key = 'weekly'
  return projects
    .filter(project => !!project.trends.weekly)
    .map(project =>
      Object.assign({}, project, { [key]: getWeeklyScore(project) })
    )
    .sort((a, b) => (a[key] > b[key] ? -1 : 1))
}

module.exports = sortProjects
