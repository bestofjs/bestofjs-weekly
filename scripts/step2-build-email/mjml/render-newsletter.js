const renderHeader = require('./render-header')
const renderIntro = require('./render-intro')
const renderProject = require('./render-project')
const renderFooter = require('./render-footer')

function renderNewsletter({ projects, provider, number, story }) {
  const spacer = (space = 20) => `<mj-spacer height="${space}px" />`
  return `
    <mjml>
      <mj-head>
        <mj-style inline="inline">
          a { color: #e65100; text-decoration: none }
        </mj-style>
      </mj-head>    
      <mj-body background-color="#ececec">
        ${renderHeader()}
        ${renderIntro({ number, story })}
        <mj-wrapper padding="0 20px 20px 20px">
          ${projects.map(renderProject).join(spacer())}
        </mj-wrapper>
        <mj-divider border-color="#e65100"></mj-divider>
        ${renderFooter({ provider })}
      </mj-body>
    </mjml>
`
}
module.exports = renderNewsletter
