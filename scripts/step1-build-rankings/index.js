const build = require('./build-weekly-report')
const { createStoryIfNeeded } = require('./build-weekly-story')
const getLastIssueNumber = require('../utils/get-last-issue-number')

async function buildData() {
  console.log('Build the weekly report...')
  const lastIssueNumber = await getLastIssueNumber()
  const number = lastIssueNumber + 1
  await createStoryIfNeeded({ number })
  const result = await build({ number })
  console.log('THE END', result)
}

buildData()

module.exports = buildData
