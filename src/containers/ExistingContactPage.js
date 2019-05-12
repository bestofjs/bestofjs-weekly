import React from 'react'
import { withRouteData } from 'react-static'

const ExistingContactPage = ({}) => {
  return (
    <div>
      <h1>Already registered</h1>
      <p>Thank you, your email address has already been registered.</p>
    </div>
  )
}

export default withRouteData(ExistingContactPage)
