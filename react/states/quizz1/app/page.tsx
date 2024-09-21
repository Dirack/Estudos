"use client"

import { useState } from "react"
import { questions } from "./data/questions"
import QuestionItem from "./components/QuestionItem"

const Page = ()=>{

  let [currentQuestion,setCurrentQuestion] = useState(0)

  const handleAnswer = (answer: number)=>{}

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl shadow shadow-gray-300">
          Quizz de culinária
        </div>
        <div className="p-5 border-b border-gray-300">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion+1}
            onAnswer={handleAnswer}
          />
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {currentQuestion+1} de {questions.length} pergunta{questions.length === 1? '':'s'}
        </div>
      </div>
    </div>
  )
}

export default Page