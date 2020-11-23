const { countBy, flatten, orderBy, result } = require('lodash')
const { default: fetchContent } = require('../../src/utils/fetch-content')

/*
Aggregate dat from JSON files to see how many files the same projects comeback
*/

const limit = 50

async function main() {
  const issues = await fetchContent()
  const projects = flatten(
    issues.slice(0, limit).map((issue) => issue.trending)
  )
  const byName = countBy(projects, 'name')
  const sorted = orderBy(
    Object.entries(byName),
    ([name, count]) => count,
    'desc'
  )
  printResults(sorted)
}

main()

function printResults(results) {
  results.slice(0, 10).forEach(([name, count]) => {
    console.log(name, ((count * 100) / limit).toFixed() + '%')
  })
}
