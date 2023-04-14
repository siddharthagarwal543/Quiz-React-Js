import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
// import BooksList from "./components/BooksList";
import "./updateQuestion.css";
import AddQuestion from "./AddQuestion"
import Questionlist from "./Questionlist"

function App() {
  const [questionId, setQuestionId] = useState("");

  const getQuestionIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setQuestionId(id);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Add , Remove or Update Questions</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            {/* <AddBook id={bookId} setBookId={setBookId} /> */}
            <AddQuestion id={questionId} setQuestionId={setQuestionId}/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {/* <BooksList getBookId={getBookIdHandler} /> */}
            <Questionlist getQuestionId={getQuestionIdHandler}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;