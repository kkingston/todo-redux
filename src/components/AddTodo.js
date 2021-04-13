import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ""
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit= e => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({title: ""})
  }

 

  render() {
    return (
      <div>
        <h2>Add todo</h2>
        <form onSubmit={this.handleSubmit}>

          <input type='text' value={this.state.title} onChange={this.handleChange} placeholder="enter title" />
          <input type="submit" value="add todo" />
        </form>
      </div>
    )
  }
}

export default AddTodo