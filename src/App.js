import React from 'react'
import Homepage from './Components/LandingPage/Homepage'
import NewQuiz from './Components/Questions/NewQuiz'
import UpdateQuestion from './Components/Firebase/updateQuestion'
import Quizpage from './Components/Quizpage/Quizpage'
import './App.css'
import Score from './Components/Quizpage/Score'

const App = () => {
  return (
    <div>
      {/* <NewQuiz/> */}
      
     <Quizpage/>
     <Score/>
    </div>
  )
}



export default App