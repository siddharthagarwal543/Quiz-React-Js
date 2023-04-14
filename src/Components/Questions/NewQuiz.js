import React, { useState } from 'react'

const NewQuiz = () => {
const [records,setRecords]=useState([]);
const [quizDetails,setQuizDetails]=useState({
    title:"",
    quizName:"",
    description:"",
    gradingSystem:"",
    time_limit:""
});

const handleChange=(e)=>{
const name=e.target.description;
const value=e.target.value;
console.log(name,value);
setQuizDetails({...quizDetails,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord={...quizDetails,id : new Date().getTime.toString()}
    console.log(records);
    setRecords([...records,newRecord]);
    console.log(records);
}
  return (
  <div className='form-container'>
          <div class="wrapper">
    <div class="title">New Quiz</div>
    <br/>
    <form action="#">
    <div class="gender-details">
            <input type="radio" name="gender" id="dot-1"/>
            <input type="radio" name="gender" id="dot-2"/>
            <input type="radio" name="gender" id="dot-3"/>
            <span class="gender-title">Quiz Name</span>
            <div class="category">
                <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">2EC601</span>
                </label>
                <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">2EC602</span>
                </label>
                <label for="dot-3">
                    <span class="dot three"></span>
                    <span class="gender">2EC603</span>
                </label>
            </div>        
        </div>
        <div class="user-details">
            <div class="input-box">
                <span class="details">Description</span>
                <input name="description" type="text" value={quizDetails.description} placeholder="Enter Course Code" onChange={handleChange} required/>
            </div>
            </div>

        <div class="gender-details">
            <input type="radio" name="gender" id="grad-dot-1"/>
            <input type="radio" name="gender" id="grad-dot-2"/>
            <input type="radio" name="gender" id="grad-dot-3"/>
            <span class="gender-title">Grading System</span>
            <div class="category">
                <label for="grad-dot-1">
                    <span class="dot one"></span>
                    <span class="gender">Percentage Grading</span>
                </label>
                <label for="grad-dot-2">
                    <span class="dot two"></span>
                    <span class="gender">Letter Grading</span>
                </label>
            </div>        
        </div>
        <div class="gender-details">
            <input type="radio" name="gender" id="time-dot-1"/>
            <input type="radio" name="gender" id="time-dot-2"/>
            <input type="radio" name="gender" id="time-dot-3"/>
            <span class="gender-title">Time Limit</span>
            <div class="category">
                <label for="time-dot-1">
                    <span class="dot one"></span>
                    <span class="gender">1 minutes</span>
                </label>
                <label for="time-dot-2">
                    <span class="dot two"></span>
                    <span class="gender">3 minutes</span>
                </label>
                <label for="time-dot-3">
                    <span class="dot three"></span>
                    <span class="gender">5 minutes</span>
                </label>
            </div>        
        </div>
        <div class="button">
            <input type="submit" onClick={handleSubmit} value="Create Quiz"/>
        </div>
    </form>
</div>

  </div>
  )
}

export default NewQuiz