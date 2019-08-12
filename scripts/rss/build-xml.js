import builder from 'xmlbuilder'

import { getAvatarUrl } from '../../src/utils/project-helpers'

export default function buildXml(projects) {
  const xml = builder
    .create('rss', { version: '1.0', encoding: 'UTF-8' })
    .att('version', '2.0')
    .ele('channel')
  xml.ele('title', {}, 'Best of JavaScript - Weekly trends')
  xml.ele('link', {}, 'https://bestofjs.org/projects/trending/this-week')
  xml.ele('pubDate', {}, new Date())
  xml.ele('lastBuildDate', {}, new Date())
  projects.forEach(project => {
    addItem(xml, project)
  })
  return xml.end({ pretty: true })
}

function addItem(xmlParent, project) {
  const repoUrl = `https://github.com/${project.full_name}`
  const xmlItem = xmlParent.ele('item')
  xmlItem.ele(
    'title',
    {},
    `${project.name} [+${project.weekly} stars this week]`
  )
  xmlItem.ele('author', {}, project.full_name.split('/').slice(0, 1))
  xmlItem.ele('description', {}, project.description)
  xmlItem.ele('link', {}, project.url || repoUrl)
  xmlItem.ele('pubDate', {}, project.pushed_at)
  xmlItem.ele('image', {}, getAvatarUrl(project, 200))
}
