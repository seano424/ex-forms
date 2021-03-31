import React, { Component } from "react";

export default class h1 extends Component {
  handleRemove = (id) => {
    this.props.removeBox(id)
  }

  render() {
    return (
      <div
        onClick={() => this.handleRemove(this.props.box.id)}
        style={{
          backgroundColor: `${this.props.box.backgroundColor}`,
          width: `${this.props.box.width}rem`,
          height: `${this.props.box.height}rem`,
          margin: 'auto'
        }}
      ></div>
    );
  }
}
