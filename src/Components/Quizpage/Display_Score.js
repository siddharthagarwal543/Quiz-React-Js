import React from 'react'
import { useLocation } from 'react-router-dom'

function Display_Score() {
  const location = useLocation();
  // console.log(location.state.data.total)
  return (
    <div className='score-container'>Your Result Score is: {location.state.data.total} </div>
  )
}

export default Display_Score