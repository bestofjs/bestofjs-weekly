import fs from 'fs-extra'
import path from 'path'

export async function fetchRankings() {
  const folderPath = ['data', 'rankings']
  const filenames = await readDataFolder(folderPath)
  const result = await Promise.all(
    filenames.map(readWeeklyReportFile(folderPath))
  )
  const sorted = result.slice().sort((a, b) => (a.number > b.number ? -1 : 1))
  return sorted
}

export async function getLatestRankings({ number }) {
  const rankings = await fetchRankings()
  const latestRankings = rankings.find(story => number === story.number)
  return latestRankings
}

export async function getLastIssueNumber() {
  const rankings = await fetchRankings()
  const latestRankings = rankings[0]
  const { number } = latestRankings
  return number
}

async function readDataFolder(folderPath) {
  const filePath = path.join(process.cwd(), ...folderPath)
  const files = await fs.readdir(filePath)
  return files
}

function getIssueNumberFromFilename(filename) {
  const parts = /.*-(\d+).*/.exec(filename)
  if (!parts) {
    throw new Error(`Unable to parse the JSON filename: "${filename}"`)
  }
  const numbers = parts[1]
  const issueNumber = parseInt(numbers, 10)
  return issueNumber
}

const readWeeklyReportFile = folderPath => async filename => {
  const number = getIssueNumberFromFilename(filename)
  const filepath = path.join(process.cwd(), ...[...folderPath, filename])
  const json = await fs.readJson(filepath)
  return {
    number,
    ...json
  }
}
