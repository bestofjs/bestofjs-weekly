const numeral = require('numeral')

import { getWeeklyRelativeGrowth } from '../../../src/utils/project-helpers'

const renderProject = (options) => (project, index) => {
  const size = 50
  const iconUrl = getProjectAvatarUrl(project, size)
  const url = getUrl(project)

  return `
    <tr>
      <td>
        <img src="${iconUrl}" width="${size}" height="${size}" alt="${
    project.name
  }" />
      </td>
      <td style="padding: 8px;">
        <a href="${url}">${project.name}</a><br />
        <div style="color: #788080;">${project.description}</div>
      </td>
      <td width="50">${renderScore(project, options)}</td>
    </tr>
  `
}

const renderScore = (project, { showStars, showDelta, showGrowth }) => {
  if (showGrowth) return renderGrowthScore(project)
  if (showDelta) return renderDelta(project)
  return renderStars(project)
}

// <td style="width: 30px; font-size: 24px; color: #788080">${index + 1}</td>

const renderGrowthScore = (project) => {
  const score = getWeeklyRelativeGrowth(project) * 100
  const decimals = score >= 10 ? 0 : 1
  return `+${score.toFixed(decimals)}%`
}

const renderDelta = (project) => {
  const value = project.trends.weekly
  const digits = value > 1000 && value < 10000 ? '0.0' : '0'
  return `+${numeral(value).format(`${digits}a`)}★`
}

const renderStars = (project) => {
  const value = project.stars
  const digits = value > 1000 && value < 10000 ? '0.0' : '0'
  return `${numeral(value).format(`${digits}a`)}★`
}

const isUrl = (input) => input.startsWith('http')

const formatIconUrl = (input) =>
  isUrl(input) ? input : `https://bestofjs.org/logos/${input}`

const formatOwnerAvatar = (owner_id, size) =>
  `https://avatars.githubusercontent.com/u/${owner_id}?v=3&s=${size}`

function getProjectAvatarUrl(project, size) {
  // svg icon seem to not work in email clients,
  // so we always show the Github project owner avatar, not the project icon
  const svgEnabled = false
  return svgEnabled && project.icon
    ? formatIconUrl(project.icon)
    : formatOwnerAvatar(project.owner_id, size)
}

function getUrl(project) {
  return project.url ? project.url : `https://github.com/${project.full_name}`
}

function formatStarNumber(value) {
  const digits = value > 1000 && value < 10000 ? '0.0' : '0'
  return numeral(value).format(`${digits} a`)
}

module.exports = renderProject
