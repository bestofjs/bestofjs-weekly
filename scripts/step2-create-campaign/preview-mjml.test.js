require('dotenv').load()
const debug = require('debug')('bestofjs')
const prettyBytes = require('pretty-bytes')

const buildNewsletter = require('./build-email-html')
const createTemplate = require('./api/create-template')
const createCampaign = require('./api/create-campaign')
import fetchRankings from '../../src/utils/fetch-rankings'
import getLastIssueNumber from '../utils/get-last-issue-number'
import fetchStories from '../../src/utils/fetch-stories'
import renderNewsletter from './mjml/render-newsletter'

async function getLatestStory({ number }) {
  const stories = await fetchStories()
  const latest = stories.find(story => number === story.number)
  return latest ? latest.contents : `<p>No story #${number} found!</p>`
}
async function getLatestRankings({ number }) {
  const rankings = await fetchRankings()
  const latestRankings = rankings.find(story => number === story.number)
  return latestRankings
}

async function preview() {
  debug('--- Start preview script ---')
  const number = await getLastIssueNumber()
  const story = await getLatestStory({ number })
  debug(`This week story: ${story.slice(0, 50)}...`)
  const { growing, trending } = await getLatestRankings({ number })
  debug('Growing', growing.map(project => project.name))
  debug('Trending', trending.map(project => project.name))

  const mjml = renderNewsletter({
    projects: trending,
    provider: 'elasticemail',
    number,
    story
  })
  console.log(mjml)
}

preview()
