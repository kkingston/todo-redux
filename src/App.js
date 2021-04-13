import React, { Component } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

export class App extends Component {

  state = {
    todos: [
      { id: 1, title: "walk dog" },
      { id: 2, title: "sleep till night" },
      { id: 3, title: "drink tea" }
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    const newTodos = [...this.state.todos, todo]
    this.setState({
      todos: newTodos
    })
  }

  handleDelete = (id) => {
    const filtedTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: filtedTodos
    })
  }


  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <Todos handleDelete={this.handleDelete} todos={this.state.todos} />
      </div>
    )
  }
}

export default App
