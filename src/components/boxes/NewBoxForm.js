import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default class NewBoxForm extends Component {
  state = {
    width: '',
    height: '',
    backgroundColor: '',
    id: ''
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newBox = {...this.state, id: uuidv4()}
    this.props.addBox(newBox)
    this.setState({ 
      width: "",
      height: "",
      backgroundColor: "",
      id: ""
     })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{marginTop: '15em'}}>
        <h1>Color Boxxxxxxx</h1>
        <input type="text" name="width" placeholder="place width" onChange={this.handleChange} value={this.state.width} />
        <input type="text" name="height" placeholder="place height" onChange={this.handleChange} value={this.state.height} />
        <input type="text" name="backgroundColor" placeholder="place background color" onChange={this.handleChange} value={this.state.backgroundColor} />
        <button>Submit</button>
      </form>
    )
  }
}
