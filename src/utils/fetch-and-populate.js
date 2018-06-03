const got = require('got')

const fetchNewsletters = require('./fetch-newsletters')

function fetchAllProjectsAndTags() {
  const url = 'https://bestofjs-api-v2.firebaseapp.com/projects.json'
  return got(url, { json: true }).then(r => r.body)
}

const populate = ({ tags }) => newsletter => {
  const findByCode = code => tags.find(tag => tag.code === code)
  const projects = newsletter.projects.map(project => ({
    ...project,
    tags: project.tags.map(findByCode)
  }))
  return { ...newsletter, projects }
}

async function fetchAndPopulate(params) {
  const newsletters = await fetchNewsletters()
  const { tags } = await fetchAllProjectsAndTags()
  return newsletters.map(populate({ tags }))
}

module.exports = fetchAndPopulate
