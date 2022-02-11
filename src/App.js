import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <main className='app'>
        <nav className='nav-bar'>
          <h1>Rock It Out</h1>
          <button>Add a Route</button>
          <button>View Your Routes</button>
        </nav>
        <div className='quote-div'>
          <h1>Climb More, Worry Less</h1>
        </div>
      </main>
    )
  }
}

export default App