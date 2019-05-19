import fetchRankings from '../../src/utils/fetch-rankings'

export default async function geLastIssueNumber() {
  const rankings = await fetchRankings()
  const latestRankings = rankings[0]
  const { number } = latestRankings
  return number
}
