import React, { Component } from 'react'
import './AddRoute.css'

class AddRoute extends Component {
  constructor(props){
    super(props)
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

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value})
  } 

  submitClimb = event => {
    event.preventDefault()
    const newClimb = {
      id: Date.now(),
      ...this.state
    }
    this.props.addClimb(newClimb)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ 
      style: '',
      location: '',
      name: '',
      grade: '',
      success: '',
      attempt: 0,
      date: ''
    })
  }

  render() {
    return (
      <form className='add-route' onSubmit={this.submitClimb}>
        <select name='style' value={this.state.style} onChange={this.handleChange}>
          <option>Style?</option>
          <option value='boulder problem'>Boulder Problem</option>
          <option value='top rope route'>Top Rope Route</option>
          <option value='lead route'>Lead Route</option>
        </select>
        <input 
          type='text'
          placeholder='Which gym?'
          name='location'
          value={this.state.location}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Route/Problem Name?'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Grade?'
          name='grade'
          value={this.state.grade}
          onChange={event => this.handleChange(event)}
        />
        <select name='success' value={this.state.success} onChange={this.handleChange}>
          <option>How'd You Do?</option>
          <option value='onsight'>Onsight</option>
          <option value='flash'>Flash</option>
          <option value='climbed'>Climbed</option>
          <option value='bailed'>Bailed</option>
        </select>
        <input 
            type='number'
            placeholder='Attempt #?'
            name='attempt'
            value={this.state.attempt}
            onChange={event => this.handleChange(event)}
        />
        <input 
          type="date" 
          name="date" 
          value={this.state.date} 
          min="2020-01-01" 
          max="2022-12-31" 
          onChange={event => this.handleChange(event)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default AddRoute