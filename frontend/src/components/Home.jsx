import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ListOfQuestions from './ListOfQuestions'
import { Wrapper, Button } from '../styles/styledComponents'

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const logout = async () => {
    try {
      axios.post('/account/logout')
      setLoggedIn(false)
    } catch (e) {
      alert('Not able to logout')
    }
  }
  const getLoginState = async () => {
    try {
      const response = await axios.post('/account/getSession')
      setUsername(response.data)
      setLoggedIn(true)
    } catch {
      setLoggedIn(false)
    }
  }
  useEffect(() => {
    getLoginState()
  }, [])

  return (
    <Wrapper>
      {loggedIn
        ? (
          <div>
            {username}
            <Button type="button" onClick={() => logout()}>Logout</Button>
          </div>
        )
        : (
          <Link to="/login">
            <Button type="button">Login to ask a question!</Button>
          </Link>
        )}
      <ListOfQuestions
        loggedIn={loggedIn}
      />
    </Wrapper>
  )
}

export default Home
