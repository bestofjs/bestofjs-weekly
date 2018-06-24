const fetchTrendingProjects = require('./fetch-trending-projects')

fetchTrendingProjects()
  .then(projects =>
    projects
      .slice(0, 10)
      .map(project => ({ name: project.name, weekly: project.weekly }))
  )
  .then(console.log)
  .catch(console.error)
