const fs = require('fs-extra')
const path = require('path')
const debug = require('debug')('bestofjs')

import fetchStories from '../../src/utils/fetch-stories'

export async function isStoryAlreadyBuilt({ number }) {
  const stories = await fetchStories()
  const foundStory = stories.find(story => story.number === number)
  return !!foundStory
}

export async function createStory({ number }) {
  const template = `---
number: ${number}
---
Number one this week,
`
  const formattedNumber = number.toString().padStart(3, '0')
  const filePath = path.join(
    'data',
    'collections',
    'stories',
    `story-${formattedNumber}.md`
  )
  debug('Creating the story', filePath)
  const result = await fs.outputFile(filePath, template)
  return result
}

export async function createStoryIfNeeded({ number }) {
  debug('Start!')
  const storyExists = await isStoryAlreadyBuilt({ number })
  if (storyExists) {
    return debug(`Story number ${number} already exists!`)
  }
  return createStory({ number })
}
