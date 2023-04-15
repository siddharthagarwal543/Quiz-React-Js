import React, { useEffect, useState } from 'react'
import { Button,Table} from 'react-bootstrap';
import Questionservices from '../Firebase/question-services';

import { Link } from 'react-router-dom';
import Button_Component from './Button_Component';
import Display_Score from './Display_Score';

    


const Quizpage = () => {

     var [score,setscore] = useState(0);
     var [ansData,setAnsData] = useState({});
    //  var [totalscore,settotalscore] = useState(0);
    const handleSubmit=(e)=>{
        console.log(e)
        
    }

    const[Questions,setQuestions]=useState([]);
    useEffect(()=>{
        getQuestions();
    },[]);


    const getQuestions=async()=>{
        const data=await Questionservices.getAllQuestions();
        console.log(data.docs);
        setQuestions(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };

    
    const deleteHandler=async(id)=>{
        await Questionservices.deleteDoc(id);
        getQuestions();
    }
console.log(Questions)
const handleOnChange = (e,que)=> {
    // e.target.name
    var opted_option = e.target.value;
    var correct_option = que.correctans;
    // console.log(opted_option,correct_option);
    if(opted_option==correct_option)
    {
        ansData[que.id] = 10;
    }
    else{
        ansData[que.id] = 0;
    }
    setAnsData(ansData);
    score=0;
    Object.values(ansData).forEach(pt => {
        score +=pt;
    });
    setscore(score);
  
    console.log(score);
}
const [state, setState] = useState('start')

  return (

    <>
       <div>
       {
        Questions.map((ques) =>{
                return(
                    <div key={ques.id}>
                        <p>{ques.question}</p>
                        <br/><input name={ques.id} onChange={(e) => handleOnChange(e,ques)} type="radio" value={ques.opta}/><label>{ques.opta}</label>
                        <br/><input name={ques.id} onChange={(e) => handleOnChange(e,ques)} type="radio" value={ques.optb}/><label>{ques.optb}</label>
                        <br/><input name={ques.id} onChange={(e) => handleOnChange(e,ques)} type="radio" value={ques.optc}/><label>{ques.optc}</label>
                        <br/><input name={ques.id} onChange={(e) => handleOnChange(e,ques)} type="radio" value={ques.optd}/><label>{ques.optd}</label>
                        <br/><br/>
                        {/* <div>  </div>
                        <div>{ques.optb}</div>
                        <div>{ques.optc}</div>
                        <div>{ques.optd}</div> */}
                    </div>
                )
                
            })
       }
        {state === 'start' && (
        <Button_Component score={score} addTrip={() => setState('add-trip') } />
      )}

      {state === 'add-trip' && <Display_Score score={score}/>}

    </div>
 
    </>

  )
}




export default Quizpage