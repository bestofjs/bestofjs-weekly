function getWeeklyScore(project) {
  const { deltas } = project
  const score = deltas.slice(0, 7).reduce((acc, delta) => acc + delta, 0)
  return score
}

function sortProjects(projects) {
  const key = 'weekly'
  return projects
    .filter(project => project.deltas.length > 1)
    .map(project =>
      Object.assign({}, project, { [key]: getWeeklyScore(project) })
    )
    .sort((a, b) => (a[key] > b[key] ? -1 : 1))
}

module.exports = sortProjects
