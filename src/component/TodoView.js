import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useCallback, useRef, useState } from 'react'

const TodoView = () => {
  const [item, setItem] = useState([])
  const maxId = useRef(0)

  const setTodoItem = useCallback(
    text => {
      const maxIdTemp = (maxId.current += 1)
      setItem(item.concat({ todo: text, id: maxIdTemp, value: false }))
    },
    [item, maxId],
  )

  const setDelete = useCallback(
    id => {
      const newArr = item.filter(it => it.id !== id)
      setItem(newArr)
    },
    [item],
  )

  const setChecked = useCallback(
    (todoIt, checkFlag) => {
      const newArr = item.map(it => {
        if (it.id === todoIt.id) it.value = checkFlag
        return it
      })

      setItem(newArr)
    },
    [item],
  )

  return (
    <div>
      <p>TodoView</p>
      <hr />
      <TodoInput setItem={setTodoItem} />
      {item.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          setChecked={setChecked}
          setDelete={setDelete}
        />
      ))}
    </div>
  )
}

export default TodoView
