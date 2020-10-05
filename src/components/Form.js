import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value:""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target
    console.log(value)
    this.setState(() => {
      return {
        value
      }
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="userInput">Enter some text:</label>
        <input 
          name="userInput"
          type="text"
          value={this.state.value}
          onChange={this.handleChange} 
        />
        <p>{this.state.value}</p>
      </form>
    )
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;

