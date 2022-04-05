import React, { useState, useCallback } from 'react'
import { nanoid } from 'nanoid';
import './Questions.css'

// Randomize options and answers
// Selectable options
// Check correct answers
// Give points?
// Cleanup html entities when fetch is made


const Questions = () => {
    const [allQuestions, setAllQuestions] = useState([])

    const fetchQuestions = useCallback(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => { setAllQuestions(data.results) })
    }, [])

    console.log(allQuestions)

    const questions = allQuestions.map(question => {
        const options = question.incorrect_answers.map(e => {
            return (
                <button className='answer'>{e}</button>
            )
        })
        return (
            <div className='question-container' key={nanoid()}>
                <h3 className='question'>
                    <>
                        {question.question}
                    </>
                </h3>
                <div className='answer-container'>
                    <button className='answer'>{question.correct_answer}</button>
                    {options}
                </div>
            </div>
        )
    })

    return (
        <div className='game-container'>
            {questions}
            <div className='btn-container' >
                <button onClick={fetchQuestions} className='start-btn'>Refresh Questions</button>
            </div>
        </div>

    )
}

export default Questions;