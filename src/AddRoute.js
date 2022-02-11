import React, { Component } from 'react'
import './AddRoute.css'

class AddRoute extends Component {
  constructor(){
    super()
    this.state = {
      style: '',
      location: '',
      name: '',
      grade: '',
      success: '',
      attempt: 0,
      date: ''
    }
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value})
  } 

  render() {
    <form>
      <label>
        Style?
        <select value={this.state.style} onChange={this.handleChange}>
          <option></option>
        </select>
      </label>
      <input 
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
      />
      <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
    </form>
  }
}

export default AddRoute