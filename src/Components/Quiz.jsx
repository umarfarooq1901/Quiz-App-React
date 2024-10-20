import React, { useState } from 'react'
import QuizList from './QuizList'
import questions from './Questions'


const Quiz = () => {

      const [questionListIndex, setQuestionListIndex] = useState(0);
      const [disableBtn, setDisableBtn] = useState(true);
      const [selectedOptions, setSelectedOptions] = useState(null);
      const [message, setMessage] = useState('');
      const [score, setScore] = useState(0)
   

    // This function handles when an option is selected
      const handleSelect = (optionSelected)=>{
        if(selectedOptions) return; // Prevent selecting again

          setSelectedOptions(optionSelected); // Set the selected option
          if(optionSelected === questions[questionListIndex].answer){
            setMessage('Correct Answer!');
           setScore(prevScore => prevScore + 1); //updates the score by using the most recent value, ensuring that each time you call it, it accurately reflects the current score.
            
          }
          else{
            setMessage('Wrong Answer!')
         
          }
        setDisableBtn(false);  // Enable the "Next Question" button
       


      }
      const handleNextQuestion = ()=>{
        setQuestionListIndex (questionListIndex + 1);
        setDisableBtn(true) // Disable the button until a new option is selected
        setSelectedOptions(null) // Reset selected option for the next question
        setMessage('')

      }

  return (
    <div className='Quiz'>
      {questionListIndex < questions.length ? <div>  <QuizList questions = {questions[questionListIndex].question} options = {questions[questionListIndex].options} answer = {questions[questionListIndex].answer} handleSelect = {handleSelect} selectedOptions = {selectedOptions}/>
    
    <div className="flex flex-col items-center h-64 ">
<div className="message-box font-bold text-2xl text-center text-white py-3">
{message && (
  <p className={`${selectedOptions === questions[questionListIndex].answer ? 'bg-emerald-600 rounded py-2 px-3' : 'bg-red-500 rounded py-2 px-3'}`}>
    {message}
  </p>
)}
</div>

    <div className="btn-container mt-4">
    <button
      className='bg-emerald-700 text-white rounded px-3 py-2 hover:bg-emerald-600 disabled:bg-gray-400 disabled:cursor-not-allowed'
      disabled={disableBtn} onClick={handleNextQuestion}>
      Next Question
    </button>
    </div>


   

    </div> 
    
    </div>  : <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100 rounded-lg shadow-md mt-5">
    <h2 className="text-3xl font-semibold text-gray-800 mb-2 py-5">Thank You for Joining the Quiz!</h2>
    <p className="text-xl text-gray-600 py-5">Your final score is: <span className="font-bold text-emerald-600">{score}</span> out of {questions.length}</p>
    <p className="text-md text-gray-500 mt-2 mb-4">We hope you enjoyed the quiz and learned something new!</p>
</div> }
 
   
    </div>
  )
}

export default Quiz
