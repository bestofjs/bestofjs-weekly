import React from 'react'
import { withRouteData } from 'react-static'

const EmailConfirmedPage = ({}) => {
  return (
    <div>
      <h1>Email Confirmed!</h1>
      <p>Thank you, your email address has been successfully registerered.</p>
      <p>
        You will soon receive in your mailbox a weekly newsletter from{' '}
        <i>Best of JavaScript</i>.
      </p>
      <p>See you soon!</p>
    </div>
  )
}

export default withRouteData(EmailConfirmedPage)
