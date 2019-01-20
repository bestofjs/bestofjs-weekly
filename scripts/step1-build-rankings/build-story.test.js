const { createStoryIfNeeded } = require('./build-weekly-story')

async function test() {
  const result = await createStoryIfNeeded({ number: 999 })
  console.log(result)
}

test()
