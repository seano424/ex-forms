import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

export default class NewTodoForm extends Component {
  state = {
    task: '',
    id: ''
  }

  handleChange = (evt) => {
    this.setState({
      task: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newTodo = {...this.state, id: uuidv4()}
    this.props.addTodo(newTodo)
    this.setState({
      task: '',
      id: ''
    })

  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <input placeholder={this.props.placeholder} type="text" value={this.state.task} name="task" onChange={this.handleChange} />
        {this.props.button ? <button>Submit</button> : ''}
      </form>
    )
  }
}
