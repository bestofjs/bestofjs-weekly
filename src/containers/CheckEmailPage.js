import React from 'react'
import { withRouteData } from 'react-static'

const CheckEmailPage = ({}) => {
  return (
    <div>
      <h1>Confirmation email sent</h1>
      <p>
        Thank you, an email has been sent, please check your mailbox and click
        on the button to confirm the subscription.
      </p>
    </div>
  )
}

export default withRouteData(CheckEmailPage)
