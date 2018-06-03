const fetchStories = require('./fetch-stories')

async function main() {
  const json = await fetchStories()
  console.log(json)
}

main()
