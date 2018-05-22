import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

import Logo from './Logo'

const Div = styled.div`
  background-color: white;
`

const Header = () => {
  return (
    <Div>
      <div className="content">
        <Link to={'/'}>
          <Logo width={160} alt="Best of JavaScript" />
        </Link>
      </div>
    </Div>
  )
}

export default Header
