import React from 'react'
import Homepage from './Components/LandingPage/Homepage'
import NewQuiz from './Components/Questions/NewQuiz'
import UpdateQuestion from './Components/Firebase/updateQuestion'
import Quizpage from './Components/Quizpage/Quizpage'
import './App.css'
import Score from './Components/Quizpage/Display_Score'
import { Navbar } from 'react-bootstrap'
import QuestionList from './Components/Firebase/Questionlist'
import Home from './Home'

const App = () => {
  return (
    <div>
      {/* <NewQuiz/> */}
      <Navbar/>
    </div>
  )
}



export default App