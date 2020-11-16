import React, { useState } from 'react'
import axios from 'axios'
import { Wrapper, Button, TextArea } from '../styles/styledComponents'

const SelectedQuestion = ({ _id, author, questionText, answerText, loggedIn, isSelected }) => {
  const [answer, setAnswerText] = useState(answerText)

  const answerQuestion = async () => {
    try {
      await axios.post('/api/answer', { _id, answer })
    } catch {
      alert('Unable to submit answer')
    }
  }

  return (
    <div>
      {isSelected && (
        <Wrapper>
          <h2 style={{ fontWeight: 'bold', color: '#111a70', margin: '0em 0em' }}>Author</h2>
          <p>{author}</p>
          <h2 style={{ fontWeight: 'bold', color: '#111a70', margin: '0em 0em' }}>Question</h2>
          <p>{questionText}</p>
          <h2 style={{ fontWeight: 'bold', color: '#111a70', margin: '0em 0em' }}>Answer</h2>
          <p>{answer}</p>
          {loggedIn && (
            <Wrapper>
              <TextArea
                type="text"
                placeholder="Your Answer"
                value={answer}
                onChange={(e) => setAnswerText(e.target.value)}
              />
              <Button type="button" onClick={() => answerQuestion()}>Submit Answer</Button>
            </Wrapper>
          )}
        </Wrapper>
      )}
    </div>
  )
}

export default SelectedQuestion
