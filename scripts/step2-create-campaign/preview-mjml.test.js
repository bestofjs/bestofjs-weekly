require('dotenv').load()
const debug = require('debug')('bestofjs')
const prettyBytes = require('pretty-bytes')
const { mapValues } = require('lodash')

const buildNewsletter = require('./build-email-html')
const createTemplate = require('./api/create-template')
const createCampaign = require('./api/create-campaign')

import { getLastIssueNumber, getLatestRankings } from '../../src/utils/rankings'
import { getLatestStory } from '../../src/utils/stories'
import renderNewsletter from './mjml/render-newsletter'

async function preview() {
  debug('--- Start preview script ---')
  const number = await getLastIssueNumber()
  const story = await getLatestStory({ number })
  debug(`This week story: ${story.slice(0, 50)}...`)
  const rankings = await getLatestRankings({ number })
  const { growing, trending } = rankings
  debug('Growing', growing.map(project => project.name))
  debug('Trending', trending.map(project => project.name))

  const mjml = renderNewsletter({
    projects: mapValues({ growing, trending }, projectList =>
      projectList.map((project, index) => ({ ...project, ranking: index + 1 }))
    ),
    provider: 'elasticemail',
    number,
    story
  })
  console.log(mjml)
}

preview()
