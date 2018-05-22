import React from 'react'
import octicons from 'octicons'
import styled from 'styled-components'

const Span = styled.span`
  color: #fa9e59;
  margin-left: 2px;
`

const StarIcon = () => (
  <Span
    dangerouslySetInnerHTML={{ __html: octicons.star.toSVG({ width: 16 }) }}
  />
)

export default StarIcon
