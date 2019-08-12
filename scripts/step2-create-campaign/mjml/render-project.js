const numeral = require('numeral')

const isUrl = input => input.startsWith('http')

const formatIconUrl = input =>
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

function renderProject(project) {
  const size = 100
  const iconUrl = getProjectAvatarUrl(project, size)
  const url = getUrl(project)
  return `
<mj-section background-color="white">
  <mj-column width="25%" background-color="#fff">
    <mj-image src="${iconUrl}" width="${size}" height="${size}" alt="${
    project.name
  }"></mj-image>
  </mj-column>
  <mj-column width="75%" background-color="#fff">
    <mj-text padding="0 20px 20px" font-size="18px">
      <a href="${url}">${project.name}</a> +${formatStarNumber(
    project.trends.weekly
  )} ★ this week
    </mj-text>
    <mj-divider border-width="1px" border-style="dashed" border-color="#cbcbcb" padding="0 20px 0 0" />
    <mj-text padding="20px">${project.description}</mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderProject
