import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {

  handleRemove = (id) => {
    this.props.removeTodo(id)
  }

  render() {
    const { id, title } = this.props.todo
    return (
      <div onClick={() => this.handleRemove(id)} className="Todo">
        <h1>{title}</h1>
      </div>
    )
  }
}
