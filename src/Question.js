import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {Button, ButtonGroup, Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

function Question({ question }) {

    const [answers, setAnswer] = useState({
        response: '',
        writtenAnswer: {
            open: false,
            response: ''
        }
    })

    const pickAnswer = (e, questionID, index) => {
        const col = e.target.parentNode;
        [...col.children].forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
        if(questionID === 682 && index === 2) {
            setAnswer({
                ...answers,
                writtenAnswer: {
                    ...answers.writtenAnswer,
                    open: true
                }
            })
        }
    }

    return (
            <Row>
                <Col>
                    <section>
                        <h4>{question.title.rendered}</h4>
                        <p>{question.prompt}</p>
                    </section>
                    <Row className="justify-content-center">
                        <Col md="auto">
                            {!answers.writtenAnswer.open ? question.content.rendered.split(',').map((answer, index) =>
                                <Button name={question.id === 681 ? 'ageRange' : 'gender'} onClick={(e) => pickAnswer(e, question.id, index)} className="rounded-0 m-1" variant="outline-dark" key={index}>
                                    {answer}
                                </Button>
                            )
                            :<div>
                                <Row>
                                    <input placeholder="Let us know" />
                                </Row>
                                <Row className="justify-content-around">
                                    <Button className="rounded-0 m-1" variant="outline-dark">Close</Button>
                                    <Button className="rounded-0 m-1" variant="outline-dark">Save</Button>
                                </Row>
                            </div>}
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
}

export default Question;
