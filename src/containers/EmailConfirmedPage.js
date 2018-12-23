import React from 'react'
import { withRouteData } from 'react-static'

const EmailConfirmedPage = ({}) => {
  return (
    <div>
      <h1>Email Confirmed!</h1>
      <p>Thank you, your email address has been successfully registerered.</p>
      <p>
        Every week, you will receive in your mailbox the list of the 10
        trendiest projects related to JavaScript and the web platform.
      </p>
      <p>
        You will be able to unsubscribe at any time, by clicking on the
        "unsubscribe" link, at the end of the email.
      </p>
    </div>
  )
}

export default withRouteData(EmailConfirmedPage)
