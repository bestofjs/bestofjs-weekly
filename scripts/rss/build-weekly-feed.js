/* eslint-disable no-console */
import buildXml from './build-xml'
import writeXml from './write-xml'

import { fetchRankings } from '../../src/utils/rankings'

export default async function buildWeeklyFeed() {
  const allRankings = await fetchRankings()
  const { trending } = allRankings[0]
  const xml = await buildXml(trending)
  const result = await writeXml(xml, 'trends.xml')
  console.log('RSS result', result)
}
