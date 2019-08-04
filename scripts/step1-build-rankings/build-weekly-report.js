const fs = require('fs-extra')
const path = require('path')
const prettyBytes = require('pretty-bytes')
const debug = require('debug')('bestofjs')

import fetchTrendingProjects from './fetch-trending-projects'

export default async function buildWeeklyReport({ number }) {
  const today = new Date()
  debug('Fetching projects')
  const { projects, growing } = await fetchTrendingProjects()
  const report = {
    date: today,
    projects,
    growing
  }
  const numberAsString = `00${number}`.slice(number.toString().length - 1) // format using 3 digits
  const filepath = path.join(
    process.cwd(),
    'data',
    'rankings',
    `weekly-${numberAsString}.json`
  )
  const filesize = prettyBytes(JSON.stringify(report).length)
  debug('Creating the JSON file', { filepath, filesize })
  await fs.outputJSON(filepath, report)
  debug('Weekly report created!')
}
