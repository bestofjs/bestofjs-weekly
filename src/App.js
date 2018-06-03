import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Header from './components/Header'
import Footer from './components/Footer'

injectGlobal`
  *,:after,:before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #541600;
    background-color: #ececec;
    border-bottom: 5px solid #e65100;
  }
  .xxx {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
    'Lucida Grande', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .link {
    color: #e65100;
  }
`

const AppStyles = styled.div`
  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
    max-width: 900px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
  }
  .text-small {
    font-size: 0.75rem;
  }
  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Header />
      <div className="content">
        <Routes />
        <Footer />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
