import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import NewQuiz from './Components/Questions/NewQuiz'
import Quizpage from './Components/Quizpage/Quizpage'
import updateQuestion from './Components/Firebase/updateQuestion'
import Display_Score from './Components/Quizpage/Display_Score'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <Router>
    <App />
    <Routes>
            <Route path='NewQuiz' element={<NewQuiz/>}/>
            <Route path='Quizpage' element={<Quizpage/>}/>
            <Route path='UpdateQuestion' element={<updateQuestion/>}/>
            <Route path='/Quizpage/DisplayScore' element={<Display_Score/>}/>
        </Routes>
  </Router>
);
