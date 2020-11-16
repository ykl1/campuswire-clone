import React, { useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import { Wrapper, Button, TextArea } from '../styles/styledComponents'

const QuestionInput = ({ loggedIn }) => {
  const [questionText, setQuestionText] = useState('')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const handleShow = () => setShow(!show)

  const submitQuestion = async () => {
    try {
      await axios.post('/api/add', { questionText })
      handleClose()
    } catch {
      alert('unable to submit question')
    }
  }
  return (
    <Wrapper>
      {loggedIn && (
        <>
          <Button variant="primary" onClick={handleShow}>
            Ask a question!
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Your Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TextArea
                header
                type="text"
                placeholder="Your Response"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => submitQuestion()}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Wrapper>
  )
}

export default QuestionInput
