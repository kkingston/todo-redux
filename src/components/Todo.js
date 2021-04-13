import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <p>{props.todo.title}</p>
      <button onClick={() => props.handleDelete(props.todo.id)} >delete todo</button>
    </div>
  )
}

export default Todo
