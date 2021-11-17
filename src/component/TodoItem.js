const TodoItem = props => {
  const { todo, setChecked } = props
  const checked = e => {
    setChecked(todo, e.target.checked)
    window.console.log('e.target.checked:' + e.target.checked)
    window.console.log(todo.value)
  }
  const onDelete = () => {
    props.setDelete(todo.id)
  }
  return (
    <div>
      <p>
        <input type="checkbox" checked={todo.value} onChange={checked} />
        <span>{todo.id}</span>
        {todo.todo}
        <button onClick={onDelete}>X</button>
      </p>
    </div>
  )
}

export default TodoItem
