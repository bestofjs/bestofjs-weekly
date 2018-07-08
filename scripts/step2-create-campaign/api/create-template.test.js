require('dotenv').load()
const createTemplate = require('./create-template')

createTemplate({
  subject: 'Template API Test',
  html: 'This is a <b>Test</b>'
}).then(console.log)
