const renderHeader = require('./render-header')
const renderIntro = require('./render-intro')
const renderProject = require('./render-project')
const renderFooter = require('./render-footer')
const renderRankings = require('./render-rankings')

function renderNewsletter({
  rankings: { trending, growing, latest },
  provider,
  number,
  story,
}) {
  const limit = 5
  const growingProjects = growing.map(addRankingNumber).slice(0, limit)
  const trendingProjects = trending
    .map(addRankingNumber)
    .filter(
      (project) =>
        !growingProjects
          .map(({ full_name }) => full_name)
          .includes(project.full_name)
    )
    .slice(0, limit)

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
          subtitle: 'By % of GitHub stars added (relative growth) this week',
          showGrowth: true,
        })}
        ${renderRankings({
          projects: latest,
          title: 'New Faces on Best of JS',
          subtitle: 'Added this week on Best of JS',
          showStars: true,
        })}
        ${renderFooter({ provider })}
      </mj-body>
    </mjml>
`
}

const addRankingNumber = (project, index) => ({
  ...project,
  ranking: index + 1,
})

module.exports = renderNewsletter
