const jdown = require('jdown')
const path = require('path')

async function fetchStories() {
  const folderPath = path.resolve(process.cwd(), 'data')
  const json = await jdown(folderPath)
  return json.stories
}

module.exports = fetchStories
