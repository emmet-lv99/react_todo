const TodoItem = props => {
  const { todo, setChecked } = props
  const checked = e => {
    setChecked(todo, e.target.checked)
    window.console.log('e.target.checked:' + e.target.checked)
    window.console.log(todo.value)
    todo.value = e.target.checked
  }
  return (
    <div>
      <p>
        <input type="checkbox" checked={todo.value} onChange={checked} />
        <span>{todo.id}</span>
        {todo.todo}
      </p>
    </div>
  )
}

export default TodoItem
