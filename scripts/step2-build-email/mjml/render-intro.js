const tinytime = require('tinytime')
const template = tinytime('{MMMM} {DD}, {YYYY}', { padDays: true })

function renderIntro({ number, story }) {
  return `
<mj-section>
  <mj-column>
    <mj-text font-size="20px">
      Best of JavaScript Weekly #${number} (${template.render(new Date())})
    </mj-text>
    <mj-text>
    Every week, you will find here the 10 trendiest projects from <a href="https://weekly.bestofjs.org">Best of JavaScript</a>, a curated
    list of projects related to the web platform and node.js.
    </mj-text>
    <mj-button href="https://weekly.bestofjs.org/issues/${number}" background-color="#e65100">Read on the web</mj-button>
    <mj-text padding="0 25px">
      ${story}
    </mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderIntro
