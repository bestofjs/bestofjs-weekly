import React from 'react'

import fetchContent from './src/utils/fetch-content'

export default {
  plugins: ['react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'Best of JavaScript Weekly'
  }),
  getRoutes: async () => {
    const issues = await fetchContent()
    const latestIssue = issues[0]
    const getIssueRoute = issue => ({
      component: 'src/containers/IssuePage',
      getData: () => ({
        issue,
        isLatest: issue.number === latestIssue.number
      })
    })
    return [
      {
        path: '/',
        component: 'src/containers/HomePage',
        getData: () => ({
          issues
        })
      },
      {
        path: '/issues',
        component: 'src/containers/IssueListPage',
        getData: () => ({
          issues
        }),
        children: issues.map(issue => ({
          ...getIssueRoute(issue),
          path: `/${issue.number}`
        }))
      },
      { path: 'check-email', component: 'src/containers/CheckEmailPage' },
      {
        path: 'email-confirmed',
        component: 'src/containers/EmailConfirmedPage'
      },
      {
        path: 'existing-contact',
        component: 'src/containers/ExistingContactPage'
      },
      {
        path: '404',
        component: 'src/containers/404'
      },
      { path: '/latest', ...getIssueRoute(latestIssue) }
    ]
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
          <title>Best of JavaScript Weekly</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  }
}
