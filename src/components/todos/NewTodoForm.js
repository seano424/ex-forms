import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default class NewTodoForm extends Component {
  state = {
    title: '',
    id: ''
  }

  handleChange = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newTodo = {...this.state, id: uuidv4()}
    this.props.addTodo(newTodo)
    this.setState({
      title: '',
      id: ''
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Add a todo" type="text" value={this.state.title} name="title" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }
}
