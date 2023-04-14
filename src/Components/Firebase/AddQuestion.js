import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import questionServices from "./question-services";

const AddQuestion = ({ id, setQuestionId }) => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [status, setStatus] = useState("Available");
const [question,setQuestion]=useState("");
const [opta,setOpta]=useState("");
const [optb,setOptb]=useState("");
const [optc,setOptc]=useState("");
const [optd,setOptd]=useState("");
const [correctans,setCorrectans]=useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (question === "" || opta === "" || optb===""||optd===""||correctans==="") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newQuestion = {
      question,
      opta,
      optb,
      optc,
      optd,
      correctans
    };
    console.log(newQuestion);

    try {
      if (id !== undefined && id !== "") {
        await questionServices.updatebook(id, newQuestion);
        setQuestionId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await questionServices.addQuestion(newQuestion);
        setMessage({ error: false, msg: "New Question added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setQuestion("");
    setOpta("");
    setOptb("");
    setOptc("");
    setOptd("");
    setCorrectans("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await questionServices.getQuestion(id);
      console.log("the record is :", docSnap.data());
      setQuestion(docSnap.data().question);
      setOpta(docSnap.data().opta);
      setOptb(docSnap.data().optb);
      setOptc(docSnap.data().optc);
      setOptd(docSnap.data().optd);
      setCorrectans(docSnap.data().correctans);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Q</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Question Title"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="formBookTitle">a</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Option a"
                value={opta}
                onChange={(e) => setOpta(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="formBookTitle">b</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Option b"
                value={optb}
                onChange={(e) => setOptb(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="formBookTitle">c</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Option c"
                value={optc}
                onChange={(e) => setOptc(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="formBookTitle">d</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Option d"
                value={optd}
                onChange={(e) => setOptd(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="formBookTitle">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Correct answer"
                value={correctans}
                onChange={(e) => setCorrectans(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup> */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddQuestion;