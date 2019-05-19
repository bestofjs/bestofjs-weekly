import build from './build-weekly-report'
import { createStoryIfNeeded } from './build-weekly-story'
import getLastIssueNumber from '../utils/get-last-issue-number'

async function buildData() {
  console.log('Build the weekly report...')
  const lastIssueNumber = await getLastIssueNumber()
  const number = lastIssueNumber + 1
  await createStoryIfNeeded({ number })
  const result = await build({ number })
  console.log('THE END', result)
}

buildData()
