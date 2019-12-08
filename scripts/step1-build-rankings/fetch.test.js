import { mapValues } from 'lodash'
import fetchTrendingProjects, {
  getWeeklyRelativeGrowth
} from './fetch-trending-projects'

async function main() {
  try {
    const result = await fetchTrendingProjects()
    console.log(
      mapValues(result, projects =>
        projects.map(project => ({
          name: project.name,
          stars: project.stars,
          added: project.trends.weekly,
          growth: getWeeklyRelativeGrowth(project)
        }))
      )
    )
  } catch (err) {
    console.error(err)
  }
}

main()
