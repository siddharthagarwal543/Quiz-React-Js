import React from 'react'

const Homepage = () => {
  return (
    <div className='home-container'>
       <div> <h1 className='title'>Quizooo</h1></div>
       <br/>
                <br/><br/>
                <br/>
        <div style={{display:'flex',flexDirection:'column'}}>
            <button className='btn-home' > Add/Remove Question</button>
                <br/>
                <br/>
            <button className='btn-home'> Take Quiz</button>
        </div>

    </div>
  )
}

export default Homepage