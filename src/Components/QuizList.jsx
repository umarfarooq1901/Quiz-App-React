import React from 'react'

const QuizList = ({questions, options, handleSelect , selectedOptions, answer}) => {
  return (
    <div className='text-center'>
        <h1 className="text-3xl font-bold bg-teal-600 text-white py-5">
        Hello Quiz App!
  </h1>
  <div className='flex justify-center'>
  <div className='bg-gray-700 text-white py-4 my-5 shadow-lg rounded w-full md:w-1/2'>
        <h2 className='font-bold my-5 text-3xl'>{questions}</h2>
        <ul >
            {options.map((option, index)=>(
                <li className= {`py-5 text-2xl cursor-pointer hover:bg-slate-600 ${selectedOptions ? 'cursor-not-allowed' : ''} 
                ${selectedOptions === option ? (option === answer ? 'bg-emerald-600' : 'bg-red-500') : ''}`} 
                key={index} 
                onClick={()=> !selectedOptions && handleSelect(option)}>{option}</li>
            ))}
        </ul>
  </div>
    </div>
    </div>
  )
}

export default QuizList
