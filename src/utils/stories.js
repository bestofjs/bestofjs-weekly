import jdown from 'jdown'
import path from 'path'

export async function fetchStories() {
  const folderPath = path.resolve(process.cwd(), 'data')
  const json = await jdown(folderPath)
  return json.stories
}

export async function getLatestStory({ number }) {
  const stories = await fetchStories()
  const latest = stories.find(story => number === story.number)
  return latest ? latest.contents : `<p>No story #${number} found!</p>`
}
