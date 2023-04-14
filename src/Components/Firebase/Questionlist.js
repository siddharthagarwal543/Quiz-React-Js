import React, { useEffect, useState } from 'react'
import { Button,Table} from 'react-bootstrap';
import Questionservices from '../Firebase/question-services';


function QuestionList({getQuestionId}) {
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




  return (
    <>

    <div className="mb-2">
      <Button variant="dark edit" onClick={getQuestions}>
        Refresh List
      </Button>
    </div>

    {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>option a</th>
          <th>option b</th>
          <th>option c</th>
          <th>option d</th>
          <th>correct answer</th>
        </tr>
      </thead>
      <tbody>
        {Questions.map((doc, index) => {
          return (
            <tr key={doc.id}>
              <td>{index + 1}</td>
              <td>{doc.question}</td>
              <td>{doc.opta}</td>
              <td>{doc.optb}</td>
              <td>{doc.optc}</td>
              <td>{doc.optd}</td>
              <td>{doc.correctans}</td>
              <td>
                <Button
                  variant="secondary"
                  className="edit"
                  onClick={(e) => getQuestionId(doc.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="delete"
                  onClick={(e) => deleteHandler(doc.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </>
  )
}

export default QuestionList