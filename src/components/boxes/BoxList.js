import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

export default class BoxList extends Component {
  state = {
    boxes: [],
  };

  addBox = (newBoxObj) => {
    this.setState((prevState) => ({
      boxes: [...prevState.boxes, newBoxObj],
    }));
    console.log(this.state);
  };

  removeBox = (id) => {
    this.setState(prevState => ({
      boxes: prevState.boxes.filter(box => box.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map((box, idx) => (
          <Box key={idx} box={box} removeBox={this.removeBox} />
        ))}
      </div>
    );
  }
}
