const fetchRankings = require('../../src/utils/fetch-rankings')

async function geLastIssueNumber() {
  const rankings = await fetchRankings()
  const latestRankings = rankings[0]
  const { number } = latestRankings
  return number
}

module.exports = geLastIssueNumber
