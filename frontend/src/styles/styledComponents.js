import s from 'styled-components'

export const Wrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Open Sans;
`

export const Input = s.input`
  width: ${(props) => (props.header ? '75vh' : '45vh')};
  padding: 0.5em;
  margin: 0.5vh;
  color: black;
  background: white;
  border: 0.15em solid rgba(99, 183, 255, 0.40);
  border-radius: 0.5em;
  font-size: 1em;
`

export const Button = s.button`
  background: ${(props) => (props.submit ? '#1feb98' : '#b1c3e0')};
  border: none;
  border-radius: 10px;
  margin: 1em 0.5em;
  padding: 0.8vh 1.8vh;
  color: white;
  font-size: 1em;
  outline: none;
`

export const HomeWrapper = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-family: Open Sans;
`

export const TextArea = s.textarea`
  width: ${(props) => (props.header ? '75vh' : '45vh')};
  height: ${(props) => (props.header ? '20vh' : '10vh')};
  padding: 0.5em;
  margin: 0.5vh;
  color: black;
  background: white;
  border: 0.15em solid rgba(99, 183, 255, 0.40);
  border-radius: .8em;
  font-size: 1em;
  font-family: sans-serif;
`
