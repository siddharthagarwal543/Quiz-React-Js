import React from 'react'
import NewQuiz from './Components/Questions/NewQuiz'
import Quizpage from './Components/Quizpage/Quizpage'
import updateQuestion from './Components/Firebase/updateQuestion'
import Display_Score from './Components/Quizpage/Display_Score'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='NewQuiz' element={<NewQuiz/>}/>
            <Route path='Quizpage' element={<Quizpage/>}/>
            <Route path='UpdateQuestion' element={<updateQuestion/>}/>
            <Route path='DisplayScore' element={<Display_Score/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Home