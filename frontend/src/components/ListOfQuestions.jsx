import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SelectedQuestion from './SelectedQuestion'
import QuestionInput from './QuestionInput'
import { Wrapper, HomeWrapper } from '../styles/styledComponents'

const ListOfQuestions = ({ loggedIn }) => {
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [key, setKey] = useState('')
  const [author, setAuthor] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isSelected, setIsSelected] = useState(false)

  const specificQuestion = (element) => {
    setKey(element._id)
    setAuthor(element.author)
    setQuestion(element.questionText)
    setAnswer(element.answer)
    setIsSelected(true)
  }

  const getAllQuestions = async () => {
    const response = await axios.get('/api')
    setCurrentQuestions(response.data)
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      getAllQuestions()
    }, 2000)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <HomeWrapper>
      <Wrapper style={{ margin: '2em 3em' }}>
        <ul>
          {currentQuestions.map((element) => (
            <li
              style={{ listStyleType: 'none', border: '1px solid #8f96d9', padding: '0.75em 0.75em' }}
              key={element._id}
              onClick={() => specificQuestion(element)}
            >
              {element.questionText}
            </li>
          ))}
        </ul>
        <QuestionInput
          loggedIn={loggedIn}
        />
      </Wrapper>
      <SelectedQuestion
        key={key}
        _id={key}
        author={author}
        questionText={question}
        answerText={answer}
        loggedIn={loggedIn}
        isSelected={isSelected}
      />
    </HomeWrapper>
  )
}

export default ListOfQuestions
