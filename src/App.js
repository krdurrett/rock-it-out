import React, { Component } from 'react'
import './App.css'
import AddRoute from './AddRoute'
import Home from './Home'
import ViewRoutes from './ViewRoutes'
import { Route, NavLink } from 'react-router-dom' 

class App extends Component {
  constructor(){
    super()
    this.state = {
      climbs: []
    }
  }

  addClimb = newClimb => {
    this.setState({ climbs: [...this.state.climbs, newClimb] });
  }


  render() {
    return (
      <main className='app'>
        <nav className='nav-bar'>
          <NavLink className='home-button' to='/'>💪ROCK IT OUT</NavLink>
          <NavLink className='nav-buttons' to="/addroute">Add a Route</NavLink>
          <NavLink className='nav-buttons' to="/viewroutes">View Your Routes</NavLink>
        </nav>
        <div className='content'>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/addroute" render={() => <AddRoute addClimb={this.addClimb}/>} />
          <Route path="/viewroutes" render={() => <ViewRoutes climbs={this.state.climbs}/>} />
        </div>
      </main>
    )
  }
}

export default App 