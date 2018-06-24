const build = require('./build-weekly-report')
const getLastIssueNumber = require('../utils/get-last-issue-number')

async function buildData() {
  console.log('Build the weekly report...')
  const lastIssueNumber = await getLastIssueNumber()
  const number = lastIssueNumber + 1
  const result = await build({ number })
  console.log('THE END', result)
}

buildData()

module.exports = buildData
