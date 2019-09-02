const renderProject = require('./render-project')

function renderRankings({ projects, title, subtitle, showGrowth }) {
  return `
  <mj-section border-top="3px solid #e65100">
    <mj-column>  
      <mj-text font-size="18px">${title}</mj-text>
      <mj-text padding-bottom="20px">${subtitle}</mj-text>
      <mj-table css-class="project-list">
        ${projects.map(renderProject({ showGrowth })).join('')}
      </mj-table>
    </mj-column>
  </mj-section>      
`
}

module.exports = renderRankings
