const TodoItem = ({ todo, setChecked, setDelete }) => {
  const checked = e => {
    setChecked(todo, e.target.checked)
  }
  return (
    <div>
      <p>
        <input type="checkbox" checked={todo.value} onChange={checked} />
        <span>{todo.id}</span>
        {todo.todo}
        <button onClick={() => setDelete(todo.id)}>X</button>
      </p>
    </div>
  )
}

export default TodoItem
