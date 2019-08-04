import { mapValues } from 'lodash'
import fetchTrendingProjects from './fetch-trending-projects'

async function main() {
  try {
    const result = await fetchTrendingProjects()
    console.log(
      mapValues(result, projects =>
        projects.map(project => ({
          name: project.name,
          added: project.trends.weekly,
          growth:
            project.trends.weekly / (project.stars - project.trends.weekly)
        }))
      )
    )
  } catch (err) {
    console.error(err)
  }
}

main()
