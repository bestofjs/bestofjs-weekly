const fetchRankings = require('./fetch-rankings')

async function main() {
  const json = await fetchRankings()
  console.log(json)
}

main()
