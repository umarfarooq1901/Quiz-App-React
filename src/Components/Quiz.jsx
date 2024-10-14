import React from 'react'
import QuizList from './QuizList'

const Quiz = () => {
    const questions = [
        {
            question: 'What is React?',
            options: ['JavaScript Framework', 'JavaScript Library', 'CSS Framework', 'Testing Tool'],
            answer: 'JavaScript Library'
        },
        {
            question: 'What is 2+3?',
            options: ['5', '6', '8', '4'],
            answer: '5'
        }
    ]
  return (
    <div className='Quiz'>
      <QuizList/>
    </div>
  )
}

export default Quiz
