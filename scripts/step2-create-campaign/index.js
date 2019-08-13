require('dotenv').load()
const debug = require('debug')('*')
const prettyBytes = require('pretty-bytes')

import { getLastIssueNumber, getLatestRankings } from '../../src/utils/rankings'
import { getLatestStory } from '../../src/utils/stories'

const buildNewsletter = require('./build-email-html')
const createTemplate = require('./api/create-template')
const createCampaign = require('./api/create-campaign')

const listIds = {
  test: '528',
  weekly: '529'
}

async function main() {
  debug('--- Start the campaign process ---')
  const number = await getLastIssueNumber()
  const story = await getLatestStory({ number })
  debug(`This week story: ${story.slice(0, 50)}...`)
  const rankings = await getLatestRankings({ number })
  debug(
    `This week rankings: ${rankings.trending
      .map(project => project.name)
      .slice(0, 3)
      .join(', ')}`
  )
  debug(`Creating email content for the issue number ${number}`)
  const { html, errors } = buildNewsletter({
    rankings,
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
