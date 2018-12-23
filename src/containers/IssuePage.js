import React from 'react'
import { withRouteData, Link } from 'react-static'
import Issue from '../components/Issue'

export default withRouteData(({ issue, isLatest }) => (
  <div>
    <Issue issue={issue} isLatest={isLatest} />
  </div>
))
