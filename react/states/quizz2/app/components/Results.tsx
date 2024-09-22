"use client"

import { Question } from "../types/Question"

type Props = {
    questions: Question[];
    answers: number[];
}

const Results = ({questions,answers}: Props)=>{
    return (
        <div>
            {questions.map((item,key)=>{
                return (
                    <div key={key} className="mb-3">
                        <div className="font-bold">{key+1}. {item.question}</div>
                        <div>
                            <span>({item.answer === answers[key]? 'Acertô':'Eroouuu!'}) - </span>
                            {item.options[item.answer]}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Results