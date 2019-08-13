const renderHeader = require('./render-header')
const renderIntro = require('./render-intro')
const renderProject = require('./render-project')
const renderFooter = require('./render-footer')
const renderRankings = require('./render-rankings')

function renderNewsletter({
  rankings: { trending, growing },
  provider,
  number,
  story
}) {
  const growingProjects = growing.map(addRankingNumber)
  const trendingProjects = trending
    .map(addRankingNumber)
    .filter(
      project =>
        !growing.map(({ full_name }) => full_name).includes(project.full_name)
    )

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
          projects: growingProjects,
          title: 'Growing Fast This Week',
          showGrowth: true
        })}
        ${renderRankings({
          projects: trendingProjects,
          title: 'Trending This Week',
          showGrowth: false
        })}
        ${renderFooter({ provider })}
      </mj-body>
    </mjml>
`
}

const addRankingNumber = (project, index) => ({
  ...project,
  ranking: index + 1
})

module.exports = renderNewsletter
