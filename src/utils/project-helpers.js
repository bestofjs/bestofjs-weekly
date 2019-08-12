export function getWeeklyRelativeGrowth(project) {
  const { trends, stars } = project
  const delta = trends.weekly
  return delta / (stars - delta)
}

export function getUrl(project) {
  return project.url ? project.url : `https://github.com/${project.full_name}`
}

/*
Return the image URL to be displayed inside the project card
Can be either :
* the GitHub owner avatar (by default if no `icon` property is specified)
* A custom SVG file if project's `icon`property is specified.
The SVG can be stored locally (inside `www/logos` folder) or in the cloud.
*/
export function getAvatarUrl(project, size) {
  return project.icon
    ? formatIconUrl(project.icon)
    : formatOwnerAvatar(project.owner_id, size)
}

function isUrl(input) {
  return input.startsWith('http')
}

function formatIconUrl(input) {
  return isUrl(input) ? input : `https://bestofjs.org/logos/${input}`
}

function formatOwnerAvatar(owner_id, size) {
  return `https://avatars.githubusercontent.com/u/${owner_id}?v=3&s=${size}`
}
