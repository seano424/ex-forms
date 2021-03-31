import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  state = {
    isEditing: false,
    task: this.props.task,
    isCrossedOut: false
  };

  handleRemove = (id) => {
    if (!this.state.isCrossedOut) {
      this.setState({
        isCrossedOut: true
      })
    } else {
      this.props.removeTodo(id);
    }
  };

  handleEdit = () => {
    this.setState({
      isEditing: true,
      isCrossedOut: false
    })
  };

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.editTodo(this.props.id, this.state.task)
    this.setState({
      isEditing: false
    })
  }

  handleChange = (evt) => {
    this.setState({
      task: evt.target.value
    })
  }


  render() {
    const { id, task } = this.props;
    return (
      <div className="Todo">
        {this.state.isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder={task} name="task" value={this.state.task} onChange={this.handleChange}/>
            <button>Save</button>
          </form>
        ) : (
          <h1 className={this.state.isCrossedOut && 'Linethrough'} onClick={() => this.handleRemove(id)}>{task}</h1>
        )}
        <p onClick={this.handleEdit}>edit meeeee</p>
      </div>
    );
  }
}
