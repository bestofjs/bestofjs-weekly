import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

import Logo from './Logo'

const Div = styled.div`
  height: 60px;
  background-color: white;
`
const Grid = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  > *:first-child {
    flex-grow: 1;
  }
`
const Header = () => (
  <Div>
    <Grid className="content">
      <a href="https://bestofjs.org">
        <Logo width={160} alt="Best of JavaScript" />
      </a>
      <Menu />
    </Grid>
  </Div>
)

const MenuContainer = styled.div`
  display: flex;
  height: 100%;
  > * {
    height: 100%;
    color: #cc4700;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    &.active {
      color: #ff5900;
      border-bottom: 2px solid #ff5900;
      margin-bottom: -2px;
    }
  }
`

const Menu = () => (
  <MenuContainer>
    <Link exact to="/" className="hidden-sm">HOME</Link>
    <Link to="/latest">LATEST</Link>
  </MenuContainer>
)

export default Header
