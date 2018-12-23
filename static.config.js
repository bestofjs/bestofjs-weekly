import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

import fetchContent from './src/utils/fetch-content'


export default {
  getSiteData: () => ({
    title: 'Best of JavaScript Weekly'
  }),
  getRoutes: async () => {
    const issues = await fetchContent()
    const latestIssue = issues[0]
    const getIssueRoute = issue => {
      return {
        component: 'src/pages/IssuePage',
        getData: () => ({
          issue,
          isLatest: issue.number === latestIssue.number
        })
      }
    }    
    return [
      {
        path: '/',
        component: 'src/pages/HomePage',
        getData: () => ({
          issues
        })
      },
      {
        path: '/issues',
        component: 'src/pages/IssueListPage',
        getData: () => ({
          issues
        }),
        children: issues.map(issue => ({ ...getIssueRoute(issue), path: `/${issue.number}` }))
      },
      { path: 'check-email', component: 'src/pages/CheckEmailPage' },
      { path: 'email-confirmed', component: 'src/pages/EmailConfirmedPage' },
      { path: 'existing-contact', component: 'src/pages/ExistingContactPage' },
      {
        path: '404',
        component: 'src/containers/404'
      },
      { path: '/latest', ...getIssueRoute(latestIssue) }
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
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
}
