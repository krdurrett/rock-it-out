import React from 'react'
import './ViewRoutes.css'

const ViewRoutes = ({ climbs }) => {
  let climbList = climbs.map(climb => {
    return <div className="climb" key={climb.id}>
            <p>Date: {climb.date}</p>
            <p>Style: {climb.style}</p> 
            <p>Grade: {climb.grade}</p>
            <p>Name: {climb.name}</p>
            <p>Gym: {climb.location}</p>
            <p>Success: {climb.success}</p>
            <p>Attempts: {climb.attempt}</p>
           </div>
  })

  return (
    <div className='climbs-container'>
      {climbList}
    </div>
  )
}

export default ViewRoutes