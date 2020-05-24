import React from 'react'

export const ChevronLeftIcon = (props) => {
  return (
    <SVGContainer {...props}>
      <polyline points="15 18 9 12 15 6" />
    </SVGContainer>
  )
}

export const ChevronRightIcon = (props) => {
  return (
    <SVGContainer {...props}>
      <polyline points="9 18 15 12 9 6" />
    </SVGContainer>
  )
}

const SVGContainer = ({ children, color = 'currentColor', size = 24 }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}
