import './Question.css';
import { useState, useRef } from "react";
import {Button, Col, Row } from "react-bootstrap";

function Question({ question }) {

    const buttonsRef = useRef();

    const [answers, setAnswer] = useState({
        selectedAnswer: '',
        customAnswer: {
            answer: '',
            open: false
        }    
    })

    const pickAnswer = e => {
        switch(e.target.innerText) {
            case 'I IDENTIFY AS (PLEASE ENTER)':
                setAnswer({
                    ...answers,
                    selectedAnswer: e.target.innerText,
                    customAnswer: {
                        ...answers.customAnswer,
                        open: true
                    }
                })
                break;
            case 'CLOSE':
                setAnswer({
                    ...answers,
                    selectedAnswer: '',
                    customAnswer: {
                        ...answers.customAnswer,
                        open: false
                    }
                })
                break;
            case 'SAVE':
                setAnswer({
                    ...answers,
                    // selectedAnswer: e.target.innerText,
                    customAnswer: {
                        ...answers.customAnswer,
                        open: false
                    }
                })
                break;
            default:
                setAnswer({
                    ...answers,
                    selectedAnswer: e.target.innerText,
                })
        }
    }

    const handleInput = e => {
        setAnswer({
            ...answers,
            customAnswer: {
                ...answers.customAnswer,
                answer: e.target.value
            }
        })
    }

    return (
            <Row>
                <Col>
                    <section>
                        <h6 className="m-0 font-weight-bold">{question.title.rendered}</h6>
                        {question.prompt ? <p className="subtitle">{question.prompt}</p> : <br />}
                    </section>
                    <Row className="justify-content-center">
                        <Col ref={buttonsRef}>
                            {!answers.customAnswer.open ? question.content.rendered.split(', ').map((answer,index) =>
                                <Button 
                                key={index}
                                active={answers.selectedAnswer === answer.toUpperCase()} 
                                onClick={pickAnswer} 
                                className="rounded-0 m-1 font-weight-bold text-uppercase" 
                                variant="outline-dark" >
                                    {answer}
                                </Button>
                            )
                            :<>
                                <Row className="justify-content-center">
                                    <input className="custom-answer" onChange={handleInput} placeholder="Let us know" />
                                </Row>
                                <Row className="justify-content-center ">
                                    <Button onClick={pickAnswer} className="rounded-0 m-1 font-weight-bold text-uppercase" variant="outline-dark">Close</Button>
                                    <Button onClick={pickAnswer} className="rounded-0 m-1 font-weight-bold text-uppercase" variant="outline-dark">Save</Button>
                                </Row>
                            </>}
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
}

export default Question;
