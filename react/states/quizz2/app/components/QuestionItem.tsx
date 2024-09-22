"use client"

import { useState } from "react";
import { Question } from "../types/Question"
import { questions } from "../data/questions";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number)=>void;
}

const QuestionItem = ({question,count,onAnswer}: Props)=>{

    const [selectedAnswer,setSelectedAnswer] = useState<number | null>(null)

    const checkQuestion = (key: number)=>{
        if(selectedAnswer === null){
            setSelectedAnswer(key)

            setTimeout(()=>{
                onAnswer(key)
                setSelectedAnswer(null)
            }, 2000)
        }
    }

    return(
        <div>
            <div className="text-3xl text-bold mb-5">
                {count}. {question.question}
            </div>
            <div>
                {question.options.map((item,index)=>{
                    return (
                        <div
                            onClick={()=>{checkQuestion(index)}}
                            className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 hover:opacity-60
                            
                            ${selectedAnswer !== null && 'cursor-auto hover:opacity-100'}
                            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === index && 'bg-green-100 border-green-300'}
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === index && 'bg-red-100 border-red-300'}
                            `}
                            key={index}
                        >{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default QuestionItem