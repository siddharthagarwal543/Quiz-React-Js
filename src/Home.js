import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className='home-container'>
    <h1 className='title'>Quiz App</h1>
    <Link to="/NewQuiz"><button className="button">Create Quiz</button></Link>
    <Link to="/UpdateQuestion"><button className="button">Update Questions</button></Link>
    <Link to="/Quizpage"><button className="button">Attempt Quiz</button></Link>
    </div>
   </>
  )
}

export default Home