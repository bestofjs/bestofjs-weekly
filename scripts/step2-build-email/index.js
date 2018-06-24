const fs = require('fs-extra')
const path = require('path')
const debug = require('debug')('*')
const prettyBytes = require('pretty-bytes')

const { dateToString } = require('../utils/utils')
const data = require('../../data/rankings/weekly-004.json')
const buildNewsletter = require('./build-email-html')
const getLastIssueNumber = require('../utils/get-last-issue-number')
const fetchStories = require('../../src/utils/fetch-stories')

function writeFile({ extension, data, number }) {
  const numberAsString = `00${number}`.slice(number.toString().length - 1) // format using 3 digits
  const filepath = path.join(
    process.cwd(),
    'data',
    'mjml',
    `email-${numberAsString}.${extension}`
  )
  const filesize = prettyBytes(JSON.stringify(data).length)
  debug('Creating the file', { filepath, filesize })
  return fs.outputFile(filepath, data)
}

async function getLatestStory({ number }) {
  const stories = await fetchStories()
  const latest = stories.find(story => number === story.number)
  return latest ? latest.contents : `<p>No story #${number} found!</p>`
}

async function buildEmail() {
  const number = await getLastIssueNumber()
  debug(`Creating email content for the issue number ${number} `)
  const story = await getLatestStory({ number })
  const { html, mjml, errors } = buildNewsletter({
    projects: data.projects,
    story,
    provider: 'elasticemail',
    number
  })
  if (errors.length > 0) {
    console.error(errors)
  }
  // await writeFile('html', html)
  await writeFile({ extension: 'mjml', data: mjml, number })
  debug('MJML files created')
}

buildEmail()
