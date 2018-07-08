require('dotenv').load()
const request = require('./request')

// request({ endPoint: '/campaign/list' }).then(console.log)
request({
  endPoint: '/template/loadtemplate',
  params: { templateid: 5042 }
}).then(console.log)
