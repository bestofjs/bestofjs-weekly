import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const action = 'https://api.elasticemail.com/contact/add?version=2'
const name = 'email'

const Div = styled.div`
  background-color: white;
  padding: 2rem;
  margin-bottom: 2rem;
`
const Title = styled.div`
  font-size: 1.2rem;
`
const Text = styled.p`
  margin: 1rem 0;
`

const Row = styled.div`
  display: flex;
`
const Input = styled.input`
  margin-right: 1rem;
  font-size: 1rem;
  font-family: Roboto Slab, sans-serif;
  border-radius: 3px;
  padding: 10px;
  border: 1px solid #cc4700;
  flex-grow: 1;
`

const Button = styled.button`
  background: none;
  border: 1px solid #788080;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  color: #cc4700;
  text-align: center;
  font-family: Space Mono, monospace;
  font-weight: 400;
  white-space: nowrap;
  font-size: 1rem;
`

const Subscribe = () => {
  return (
    <Div>
      <Title>Get the latest JS rankings in your inbox every week</Title>
      <Text>
        Sign up for{' '}
        <a className="link" href="https://bestofjs.org">
          Best of JavaScript
        </a>'s newsletter, and you'll receive exclusive stats about the most
        popular JavaScript projects every week.
      </Text>
      <form action={action} method="post">
        <Row>
          <Input name={name} type="email" required />
          <Button type="submit">Sign Up</Button>
        </Row>
        <input
          name="publiclistid"
          id="CwyOqTgB"
          value="72c3249d-ed56-484d-b586-71c80b84d469"
          type="hidden"
        />
        <input
          name="publicaccountid"
          value="0941e3f0-7b53-413c-a17f-06bff65f0a13"
          type="hidden"
        />
        <input
          name="publicformid"
          value="e362aac5-777d-4d8b-a537-c807041f37cb"
          type="hidden"
        />
        <input
          name="returnUrl"
          value="https://weekly.bestofjs.org/check-email/"
          type="hidden"
        />
        <input
          name="activationReturnUrl"
          value="https://weekly.bestofjs.org/email-confirmed/"
          type="hidden"
        />
        <input name="alreadyactiveurl" value="" type="hidden" />
        <input
          name="activationTemplate"
          value="subscriber-activation"
          type="hidden"
        />
        <input name="source" value="WebForm" type="hidden" />
        <input id="ewf_captcha" name="captcha" value="false" type="hidden" />
        <input name="notifyEmail" value="" type="hidden" />
      </form>
    </Div>
  )
}

// Subscribe.propTypes = {}

export default Subscribe
