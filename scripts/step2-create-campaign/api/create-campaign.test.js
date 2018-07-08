require('dotenv').load()
const debug = require('debug')('*')
const createCampaign = require('./create-campaign')
const createTemplate = require('./create-template')

const listIds = {
  test: '528',
  weekly: '529'
}

async function createTemplateAndCampaign() {
  debug('1. Creating  a template...')
  const subject = 'Test from the API'
  const html = '<h1>This is a test</h1><p>Please ignore!</p>'
  const step1Result = await createTemplate({ html, subject })
  if (!step1Result.success) {
    throw new Error(`Template creation failed! ${step1Result.error}`)
  }
  const templateId = step1Result.data

  debug(`2. Creating a campaign from the template #${templateId}`)
  const step2Result = await createCampaign({
    fromEmail: 'hello@bestofjs.org',
    fromName: 'Best of JS',
    subject,
    listId: listIds.test,
    templateId
  })
  debug(`Campaign ${step2Result.data} created!`)
  return step2Result
}

createTemplateAndCampaign().then(console.log)
