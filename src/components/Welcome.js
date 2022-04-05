import React from 'react';
import './Welcome.css'
import { Link } from 'react-router-dom'

// https://opentdb.com/api_config.php
// https://opentdb.com/api.php?amount=5&type=multiple
// https://www.figma.com/file/3eWIVEDcxcJJaPCZtprKkx/Quizzical-App-(Copy)?node-id=0%3A1

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <h1 className='title'>Quizzical</h1>
            <p className='welcome-description'>Trivia app</p>
            <Link to="/game">
                <button className='start-btn'>Start quiz</button>
            </Link>
        </div>
    )
}

export default Welcome;