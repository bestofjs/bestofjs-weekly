const providers = {
  mailjet: {
    email: '[[EMAIL_TO]]',
    unsubscribe: '[[UNSUB_LINK_EN]]'
  },
  elasticemail: {
    email: '{accountaddress}',
    unsubscribe: '{unsubscribe}'
  }
}

function renderFooter({ provider }) {
  const settings = providers[provider]
  if (!settings) throw new Error(`Invald email provider "${provider}"`)
  const { unsubscribe } = settings
  return ` 
<mj-section>
  <mj-column>
    <mj-text>
      Thank you for your attention, visit <a href="https://bestofjs.org">Best of JavaScript</a> 
      to check out the most popular open-source projects and the latest trends about the web platform and node.js.
    </mj-text>
    <mj-text>You received this email because you subscribed from <a href="https://risingstars.js.org">JavaScript Rising Stars</a> site.</mj-text>
    <mj-text>
      If you no longer wish to receive email from Best of JavaScript, 
      <a href="${unsubscribe}">click here to unsubscribe</a>.
    </mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderFooter
