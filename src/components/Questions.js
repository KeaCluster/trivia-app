import React, { useState, useCallback } from 'react'
import { nanoid } from 'nanoid'
import './Questions.css'

// Randomize options and answers 
// Selectable options
// Check correct answers
// Give points?
// Cleanup html entities when fetch is made


const Questions = () => {
    const [allQuestions, setAllQuestions] = useState([])

    const fetchQuestions = useCallback(() => {
        fetch("https://the-trivia-api.com/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,geography,history,music,science,society_and_culture,sport_and_leisure&limit=5")
            .then(res => res.json())
            .then(data => { setAllQuestions(data) })
    }, [])

    console.log(allQuestions)

    const questions = allQuestions.map(e => {
        const arr = e.incorrectAnswers.concat(e.correctAnswer);
        const randArr = arr.sort(() => Math.random() - 0.4);
        console.log(arr)

        const options = randArr.map(e => {
            return (<div className='answer' key={nanoid()}>{e}</div>)
        })
        return (
            <div className='question-container' key={e.id}>
                <h3 className='question'>{e.question}</h3>
                <div className='answer-container'>
                    {options}
                </div>
            </div>
        )
    })


    return (
        <div className='game-container'>
            <h1 className='title'>{allQuestions.length ? "Try to answer quickly!" : "Good Luck!"}</h1>
            {questions}
            <div className='btn-container' >
                <button onClick={fetchQuestions} className='start-btn'>
                    {allQuestions.length ? "Refresh Questions" : "Load Questions"}
                </button>
            </div>
        </div>

    )
}

export default Questions;