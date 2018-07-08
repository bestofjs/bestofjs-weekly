require('dotenv').load()
const debug = require('debug')('*')
const prettyBytes = require('pretty-bytes')

const buildNewsletter = require('./build-email-html')
const fetchRankings = require('../../src/utils/fetch-rankings')
const createTemplate = require('./api/create-template')
const createCampaign = require('./api/create-campaign')
const getLastIssueNumber = require('../utils/get-last-issue-number')
const fetchStories = require('../../src/utils/fetch-stories')

const listIds = {
  test: '528',
  weekly: '529'
}

async function getLatestStory({ number }) {
  const stories = await fetchStories()
  const latest = stories.find(story => number === story.number)
  return latest ? latest.contents : `<p>No story #${number} found!</p>`
}
async function getLatestRankings({ number }) {
  const rankings = await fetchRankings()
  const latestRankings = rankings.find(story => number === story.number)
  return latestRankings.projects
}

async function main() {
  debug('--- Start the campaign process ---')
  const number = await getLastIssueNumber()
  const story = await getLatestStory({ number })
  debug(`This week story: ${story.slice(0, 50)}...`)
  const projects = await getLatestRankings({ number })
  debug(
    `This week rankings: ${projects
      .map(project => project.name)
      .slice(0, 3)
      .join(', ')}`
  )
  debug(`Creating email content for the issue number ${number}`)
  const { html, errors } = buildNewsletter({
    projects,
    story,
    provider: 'elasticemail',
    number
  })
  // if (errors.length > 0) {
  //   throw new Error(`Error when generating the email content ${errors}`)
  // }
  debug(
    'Email content generated',
    prettyBytes(html.length),
    'Creating a template...'
  )
  const subject = `Best of JavaScript Weekly Rankings #${number}`
  const step1Result = await createTemplate({ html, subject })
  if (!step1Result.success) {
    throw new Error(`Template creation failed! ${step1Result.error}`)
  }
  const templateId = step1Result.data

  debug(`Creating a campaign from the template #${templateId}...`)
  const step2Result = await createCampaign({
    fromEmail: 'hello@bestofjs.org',
    fromName: 'Best of JavaScript',
    subject,
    listId: listIds.weekly,
    templateId
  })
  debug(`Campaign #${step2Result.data} created!`)
}

main()
