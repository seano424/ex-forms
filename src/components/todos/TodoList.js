import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

export default class TodoList extends Component {
  state = {
    todos: []
  }
  
  addTodo = (newTodo) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }))
  }

  removeTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <NewTodoForm addTodo={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={this.removeTodo}/>
        ))}
      </div>
    )
  }
}
