import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  addTodo = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  editTodo = (id, updatedTask) => {
    const updatedTodos  = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, task: updatedTask}
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  
  };

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Todos</h1>
        <NewTodoForm
          addTodo={this.addTodo}
          placeholder="add a todo"
          button={true}
        />
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            removeTodo={this.removeTodo}
            editTodo={this.editTodo}
          />
        ))}
      </div>
    );
  }
}
