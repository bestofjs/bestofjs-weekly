import React from 'react'

import fetchContent from './src/utils/fetch-content'

async function getRoutes() {
  const issues = await fetchContent()
  const latestIssue = issues[0]
  const getIssueRoute = (issue) => ({
    template: 'src/containers/IssuePage',
    getData: () => ({
      issue,
      isLatest: issue.number === latestIssue.number,
    }),
  })
  return [
    {
      path: '/',
      template: 'src/containers/HomePage',
      getData: () => ({
        issues,
      }),
    },
    {
      path: '/issues',
      template: 'src/containers/IssueListPage',
      getData: () => ({
        issues,
      }),
      children: issues.map((issue) => ({
        ...getIssueRoute(issue),
        path: `/${issue.number}`,
      })),
    },
    { path: 'check-email', template: 'src/containers/CheckEmailPage' },
    {
      path: 'email-confirmed',
      template: 'src/containers/EmailConfirmedPage',
    },
    {
      path: 'existing-contact',
      template: 'src/containers/ExistingContactPage',
    },
    {
      path: '404',
      template: 'src/containers/404',
    },
    { path: '/latest', ...getIssueRoute(latestIssue) },
  ]
}

export default {
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
  ],
  getSiteData: () => ({
    title: 'Best of JavaScript Weekly',
  }),
  getRoutes: async () => {
    try {
      return await getRoutes()
    } catch (error) {
      console.error('Error while building the routes!', error.message)
      // Don't try to display the stacktrace here, it will cause a strange error
      process.exit(1) // throwing an error does not stop the building process
    }
  },
  Document: ({ Html, Head, Body, children }) => {
    const ga = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-44563970-5');      
      `
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <title>Best of JS Weekly</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:image"
            content="https://bestofjs.org/images/logo.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i|Roboto+Slab:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <Body>
          {children}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-44563970-5"
          />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </Body>
      </Html>
    )
  },
}
