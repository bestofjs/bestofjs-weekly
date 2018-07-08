const rootUrl = 'https://api.elasticemail.com/v2'
const apiKey = process.env.API_KEY
const axios = require('axios')

function request({ endPoint, ...rest }) {
  if (!apiKey) throw new Error('No `API_KEY` specified')
  const url = `${rootUrl}${endPoint}?apikey=${apiKey}`
  return axios({
    ...rest,
    url
  }).then(response => response.data)
}

module.exports = request
