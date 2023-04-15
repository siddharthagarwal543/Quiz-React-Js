import React, { useState } from 'react'
import './App.css'
import { Navbar } from 'react-bootstrap'
import {BrowserRouter as Router} from 'react-router-dom';
import NewQuiz from './Components/Questions/NewQuiz'
import Quizpage from './Components/Quizpage/Quizpage'
import UpdateQuestion from './Components/Firebase/UpdateQuestion'
import Display_Score from './Components/Quizpage/Display_Score'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import { Quizcontext } from './Context/Quizcontext';

const App = () => {
  const [quizDetails,setQuizDetails]=useState({
    name:"",
    description:"",
    gradingSystem:"",
    time_limit:0
  });
  return (
    <>
      <Router>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='UpdateQuestion' element={<UpdateQuestion/>}/>
            <Route path='NewQuiz' element={<NewQuiz/>}/>
            <Route path='Quizpage' element={<Quizpage/>}/>
            <Route path='/Quizpage/DisplayScore' element={<Display_Score/>}/>
        </Routes>
  </Router>
    <div>
      {/* <NewQuiz/> */}
      <Navbar/>
    </div>
    </>
  )
}



export default App