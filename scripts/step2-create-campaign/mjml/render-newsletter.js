const renderHeader = require('./render-header')
const renderIntro = require('./render-intro')
const renderProject = require('./render-project')
const renderFooter = require('./render-footer')
const renderRankings = require('./render-rankings')

function renderNewsletter({
  projects: { trending, growing },
  provider,
  number,
  story
}) {
  return `
    <mjml>
      <mj-head>
        <mj-style inline="inline">
          a { 
            color: #e65100;
          }
          .project-list td {
            border-bottom: 1px dashed #cecece;
            background-color: white;
          }
        </mj-style>
      </mj-head>    
      <mj-body background-color="#ececec">
        ${renderHeader()}
        ${renderIntro({ number, story })}
        ${renderRankings({
          projects: growing,
          title: 'Growing Fast This Week',
          showGrowth: true
        })}
        ${renderRankings({
          projects: trending.filter(
            project =>
              !growing
                .map(({ full_name }) => full_name)
                .includes(project.full_name)
          ),
          title: 'Trending This Week',
          showGrowth: false
        })}
        ${renderFooter({ provider })}
      </mj-body>
    </mjml>
`
}
module.exports = renderNewsletter
