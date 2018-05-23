import React from 'react'
import { withRouteData } from 'react-static'

const CheckEmailPage = ({}) => {
  return (
    <div>
      <h1>Check your email</h1>
      <p>
        An email has been sent, please check your email and click on the link to
        confirm the subscription.
      </p>
    </div>
  )
}

export default withRouteData(CheckEmailPage)
