import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { Wrapper, Input, Button } from '../styles/styledComponents'

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      await axios.post('/account/login', { username, password })
      history.push('/')
    } catch (e) {
      alert('Unable to login, please try again.')
      console.log(e)
    }
  }
  return (
    <Wrapper>
      <h1>LOGIN</h1>
      <p>Username</p>
      <Input onChange={(e) => setUsername(e.target.value)} />
      <p>Password</p>
      <Input onChange={(e) => setPassword(e.target.value)} />
      <br />
      <Button submit type="button" onClick={() => login()}>Login</Button>
      <p>No account? </p>
      <Link to="/signup">Sign up here!</Link>
    </Wrapper>
  )
}

export default Login
