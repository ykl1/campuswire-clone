import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { Wrapper, Input, Button } from '../styles/styledComponents'

const Signup = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signup = async () => {
    try {
      await axios.post('/account/signup', { username, password })
      history.push('/')
    } catch (e) {
      alert('Unable to signup, please try again.')
      console.log(e)
    }
  }
  return (
    <Wrapper>
      <h1>SIGN UP</h1>
      <p>Username</p>
      <Input onChange={(e) => setUsername(e.target.value)} />
      <p>Password</p>
      <Input onChange={(e) => setPassword(e.target.value)} />
      <br />
      <Button submit type="button" onClick={() => signup()}>Sign Up</Button>
      <p>Already have an account? </p>
      <Link to="/login">Login here!</Link>
    </Wrapper>
  )
}

export default Signup
