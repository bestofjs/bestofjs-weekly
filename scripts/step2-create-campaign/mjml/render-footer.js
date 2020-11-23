const providers = {
  mailjet: {
    email: '[[EMAIL_TO]]',
    unsubscribe: '[[UNSUB_LINK_EN]]',
  },
  elasticemail: {
    email: '{accountaddress}',
    unsubscribe: '{unsubscribe}',
  },
}

function renderFooter({ provider }) {
  const settings = providers[provider]
  if (!settings) throw new Error(`Invalid email provider "${provider}"`)
  const { unsubscribe } = settings
  return ` 
<mj-section border-top="3px solid #e65100">
  <mj-column>
    <mj-text line-height="18px">
      Thank you for your attention, visit <a href="https://bestofjs.org">Best of JS</a> 
      to check out the most popular open-source projects and the latest trends about the web platform and node.js.
    </mj-text>
    <mj-text line-height="18px">You received this email because you subscribed from <a href="https://bestofjs.org">Best of JS</a> or <a href="https://risingstars.js.org">JavaScript Rising Stars</a> site.</mj-text>
    <mj-text line-height="18px">
      If you no longer wish to receive email from Best of JS 
      <a href="${unsubscribe}">click here to unsubscribe</a>.
    </mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderFooter
