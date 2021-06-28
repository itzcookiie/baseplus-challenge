import './App.css';
import Question from "./Question/Question";
import logo from './logo.png';
import { Col, Container, Row } from "react-bootstrap";
import questions from '../quiz-questions.json';

function App() {

  return (
    <Container className="h-100 d-flex flex-column">
        <Row className="d-flex justify-content-center text-center">
            <Col>
                <img src={logo} alt="logo" />
            </Col>
        </Row>
        <Row className="flex-fill">
            <Col className="d-flex flex-column justify-content-around align-content-center text-center">
                {questions.map(question => <Question key={question.id} question={question}/> )}
            </Col>
        </Row>

    </Container>
  );
}

export default App;
