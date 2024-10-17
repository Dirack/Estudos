import { useContext, useState } from "react"
import { NumbersContext } from "./NumbersContext"

const Numbers = ()=>{

    const NumbersCtx = useContext(NumbersContext)

    const [newNumber,setNewNumber] = useState<string>('')

    const handleNumberInput = ()=>{
        let numbersList: number[] = []
        if (NumbersCtx?.numbers) numbersList = [...NumbersCtx?.numbers,parseInt(newNumber)]
        NumbersCtx?.setNumbers(numbersList)
        setNewNumber('')
    }

    return (
        <div className="flex flex-col gap-2">
            <ul>
                {NumbersCtx?.numbers &&
                NumbersCtx?.numbers.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
                }
            </ul>
            <div className="flex flex-col gap-2">
                <input className="rounded-md text-black p-1" type="number" onChange={e => setNewNumber(e.target.value)} value={newNumber}/>
                <button className="bg-yellow-500 rounded-md p-2 font-bold" onClick={handleNumberInput}>Add</button>
            </div>
        </div>
    )
}

export default Numbers