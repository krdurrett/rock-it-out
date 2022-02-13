import React from 'react'
import './ViewRoutes.css'

const ViewRoutes = ({ climbs }) => {
  let climbList = climbs.map(climb => {
    return <div className="climb" key={climb.id}>
            <p>{climb.date}</p>
            <p className='style'>{climb.style}</p> 
            <p className='grade'>{climb.grade}</p>
            <p className='name'>{climb.name}</p>
            <p className='location'>{climb.location}</p>
            <p className='success'>{climb.success}</p>
            <p>{climb.attempt}</p>
           </div>
  })

  return (
    <div className='climbs-container'>
      <div className='headers'>
        <p>Date</p>
        <p>Style</p>
        <p>Grade</p>
        <p>Name</p>
        <p>Gym</p>
        <p>Success</p>
        <p>Attempts</p>
      </div>
      <div className='climb-list'>
        {climbList}
      </div>
    </div>
  )
}

export default ViewRoutes