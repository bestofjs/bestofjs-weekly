import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #ececec;
  color: #333;
  border: solid 1px #ccc;
  font-size: 14px;
`

const TagLabel = ({ tag }) => {
  return (
    <StyledLink href={'https://bestofjs.org/tags/' + tag.code}>
      {tag.name}
    </StyledLink>
  )
}
export default TagLabel
