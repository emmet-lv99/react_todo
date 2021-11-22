import { useState } from 'react'

const TodoInput = ({ setItem }) => {
  const inlineStyle = {
    marginLeft: '10px',
  }
  const [text, setText] = useState('')
  const onChange = e => {
    setText(e.target.value)
  }
  const onClick = () => {
    setText('')
    setItem(text)
  }
  return (
    <div>
      <p>
        <input value={text || ''} onChange={onChange} type="text" />
        <button onClick={onClick} style={inlineStyle}>
          입력
        </button>
      </p>
    </div>
  )
}

export default TodoInput
