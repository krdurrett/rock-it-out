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
      climbs: [
        {id: 1, 
        style: 'boulder',
        location: 'movement',
        name: 'kazoo',
        grade: 'v1',
        success: 'flashed',
        attempt: 1,
        date: '01/20/2022'},
        {id: 1, 
        style: 'boulder',
        location: 'movement',
        name: 'kazoo',
        grade: 'v1',
        success: 'flashed',
        attempt: 1,
        date: '01/20/2022'},
        {id: 1, 
        style: 'boulder',
        location: 'movement',
        name: 'kazoo',
        grade: 'v1',
        success: 'flashed',
        attempt: 1,
        date: '01/20/2022'}
      ]
    }
  }

  addClimb = newClimb => {
    this.setState({ climbs: [...this.state.climbs, newClimb] });
  }


  render() {
    return (
      <main className='app'>
        <nav className='nav-bar'>
          <NavLink to='/'>Rock It Out</NavLink>
          <NavLink to="/addroute">Add a Route</NavLink>
          <NavLink to="/viewroutes">View Your Routes</NavLink>
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