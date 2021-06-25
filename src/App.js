import logo from './logo.svg';
import Question from "./Question";
import './App.css';
import { useState } from "react";
import {Button, ButtonGroup, Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import questions from './quiz-questions.json';

function App() {

    const [answers, setAnswer] = useState({
        gender: '',
        ageRange: ''
    })
    const [state, setState] = useState(false)

    const pickAnswer = e => {
        const col = e.target.parentNode;
        [...col.children].forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
        console.log(e.target)
    }

  return (
    <Container className="h-100 d-flex flex-column">
        <Row className="d-flex justify-content-center">
            <Col>
                <header>LOGO</header>
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
