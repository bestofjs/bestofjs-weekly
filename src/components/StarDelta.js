import React from 'react'
import numeral from 'numeral'

import StarIcon from './StarIcon'

const getSign = value => {
  if (value === 0) return ''
  return value > 0 ? '+' : '-'
}

const StarDelta = ({ average, ...props }) =>
  average ? <StarDeltaAverage {...props} /> : <StarDeltaNormal {...props} />

const StarDeltaNormal = ({ value }) => {
  const sign = getSign(value)
  const digits = value > 1000 && value < 10000 ? '0.0' : '0'
  return (
    <div className="star-delta">
      <span style={{ marginRight: 2 }}>{sign}</span>
      <span>{numeral(Math.abs(value)).format(`${digits} a`)}</span>
      <StarIcon />
    </div>
  )
}

const StarDeltaAverage = ({ value, inline }) => {
  const integerPart = Math.abs(Math.trunc(value))
  const decimalPart = (Math.abs(value - integerPart) * 10).toFixed().slice(0, 1)
  const sign = getSign(value)
  const display = inline ? 'inline' : 'block'
  if (value === null)
    return <div className="star-delta text-secondary text-small">N/A</div>
  return (
    <div className="star-delta">
      <div style={{ display }}>
        <span style={{ marginRight: 2 }}>{sign}</span>
        <span>{integerPart}</span>
        <span className="text-small">.{decimalPart}</span>
      </div>
      <div style={{ textAlign: 'center', display }}>
        <StarIcon />
        <span className="text-small" style={{ color: '#fa9e59' }}>
          /day
        </span>
      </div>
    </div>
  )
}

export default StarDelta
