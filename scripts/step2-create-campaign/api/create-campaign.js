const request = require('./request')

function createCampaign({ listId, templateId, fromEmail, fromName, subject }) {
  const campaign = {
    name: subject,
    targets: [`l${listId}`],
    CampaignTemplates: [
      {
        TemplateID: templateId,
        TemplateSubject: subject,
        TemplateFromEmail: fromEmail,
        TemplateFromName: fromName,
        TemplateReplyEmail: fromEmail,
        TemplateReplyName: fromName
      }
    ],
    TriggerType: 1, // Trigger count and trigger frequency can only be set for scheduled campaigns.'
    status: 'Draft',
    trackClicks: false
  }

  return request({
    endPoint: '/campaign/add',
    params: { campaign }
  })
}

module.exports = createCampaign
