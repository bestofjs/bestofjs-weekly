const fetchContent = require('./fetch-content')

async function main() {
  const json = await fetchContent()
  console.log(json)
}

main()
