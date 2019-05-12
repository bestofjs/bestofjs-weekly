import jdown from 'jdown'
import path from 'path'

export default async function fetchStories() {
  const folderPath = path.resolve(process.cwd(), 'data')
  console.log('Reading stories data from', folderPath)
  const json = await jdown(folderPath)
  return json.stories
}
