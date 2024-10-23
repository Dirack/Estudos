import { ChangeEvent, useContext, useState } from "react"
import { NumberContext } from "../context/NumberContext"

const Content = ()=>{

    let NumberCtx = useContext(NumberContext)

    const [numberInput,setNumberInput] = useState('')

    const handleNumberInput = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value.trim() !== '')
            setNumberInput(e.target.value.trim())
    }
    
    const handleAdd = ()=>{
        if(numberInput !== '')
            NumberCtx?.addNumber(parseInt(numberInput))
    }

    const handleRemove = ()=>{
        if(NumberCtx && NumberCtx?.numbers.length-1 >= 0)
            NumberCtx?.removeNumber(NumberCtx?.numbers.length-1)
    }

    return (
        <div className="bg-gray-800 text-white w-screen h-screen flex flex-col items-center">
            <div className="my-4 flex flex-col gap-2 border border-gray-500 p-4 rounded-md">
                <input
                className="p-2 text-xl text-black rounded-md"
                type="number" value={numberInput} onChange={e=>handleNumberInput(e)} />
                <div className="flex flex-row gap-2">
                    <button
                    className="bg-yellow-500 rounded-md p-4 font-bold"
                    onClick={handleAdd}>Add</button>
                    <button
                    className="bg-yellow-500 rounded-md p-4 font-bold"
                    onClick={handleRemove}>Pop</button>
                </div>
            </div>
        <ul>
          {NumberCtx?.numbers &&
            NumberCtx.numbers.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
}

export default Content