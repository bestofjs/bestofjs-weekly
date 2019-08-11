import React from 'react'

import { getWeeklyRelativeGrowth } from '../utils/project-helpers'

const GrowthScore = ({ project }) => {
  const score = getWeeklyRelativeGrowth(project) * 100
  return <div>+{score.toFixed(1)}%</div>
}

export default GrowthScore
