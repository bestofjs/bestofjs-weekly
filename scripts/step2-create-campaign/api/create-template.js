const querystring = require('querystring')
const request = require('./request')

function createTemplate({ html, subject }) {
  const formData = {
    fromEmail: 'hello@bestofjs.org',
    fromName: 'Best of JS',
    name: subject,
    subject,
    bodyHtml: html,
    templatescope: 2, // to create a "Draft"
  }

  return request({
    endPoint: '/template/add',
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: querystring.stringify(formData),
  })
}

module.exports = createTemplate

// will return:
// { success: true, data: 5447 }
// or, if it fails, something like:
// { success: false, error: 'Missing required parameter - name' }
