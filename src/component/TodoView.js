import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useState } from 'react'

const TodoView = () => {
  const [item, setItem] = useState([])
  const setTodoItem = text => {
    const maxArr = item.map(it => it.id)
    let maxId = maxArr.length <= 0 ? 0 : Math.max(...maxArr)
    setItem(item.concat({ todo: text, id: maxId + 1, value: false }))
  }
  const setChecked = (todoIt, checkFlag) => {
    const newArra = item.map(it => {
      if (it.id === todoIt.id) it.value = checkFlag
      return it
    })
    setItem(newArra)
  }
  const setDelete = id => {
    const newArr = item.filter(it => it.id !== id)
    setItem(newArr)
  }
  return (
    <div>
      <p>TodoView</p>
      <hr />
      <TodoInput item={item} setItem={setTodoItem} />
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
