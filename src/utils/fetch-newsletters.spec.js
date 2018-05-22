const fetchNewsletters = require('./fetch-and-populate')

async function main() {
  const json = await fetchNewsletters()
  console.log(json[1])
}

main()
