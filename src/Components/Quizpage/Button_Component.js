import React, { useState } from 'react'
import Score from './Display_Score'

const Button_Component=(props)=> {
 
  return <button onClick={props.addTrip} >Submit</button>
     {/* <button id="formSubmit" onClick={handleOnClick} type="submit">Submit</button> */}
}

export default Button_Component