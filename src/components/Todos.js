import React, { Component } from 'react'
import Todo from './Todo'

export class Todos extends Component {


  render() {

    return (
      <div>
        <h2>Todos</h2>
        {this.props.todos.map(todo => <Todo handleDelete={this.props.handleDelete} todo={todo}/>)}
      </div>
    )
  }
}

export default Todos