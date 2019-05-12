import jdown from 'jdown'
import path from 'path'

export default async function fetchStories() {
  const folderPath = path.resolve(process.cwd(), 'data')
  const json = await jdown(folderPath)
  return json.stories
}
