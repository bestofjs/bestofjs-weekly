# STEP 2 - Create the campaign

## Goal

The second step of the weekly process creates the ElasticEmail campaign, that we will be sent manually from the ElasticMail dashboard.

## Details

- Generate the email content, from the story of the week and the week's rankings
- Create a "Template" from the from the email content
- Create a "Campaign" from this template, saved as a draft

## How to debug the email content

Run the following command to get the `mjml` code used to generate the email

```shell
DEBUG=bestofjs node -r esm scripts/step2-create-campaign/preview-mjml.test.js
```

Copy and paste into MJML playground to preview the email

https://mjml.io/try-it-live
