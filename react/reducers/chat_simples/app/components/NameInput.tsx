import { KeyboardEventHandler, useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"

const NameInput = ()=>{

    const userCtx = useContext(UserContext)
    const [nameInput,setNameInput] = useState('')

    const handleKeyUpAction = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.code.toLowerCase()==='enter'){
            if(nameInput.trim()!=='' && nameInput !== 'bot'){
                userCtx?.setUser(nameInput.trim())
            }
        }
    }


    return (
        <div className="mt-14">
            <p className="text-xl mb-4">Qual o seu nome?</p>
            <div>
                <input
                    type="text"
                    className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                />
            </div>
        </div>
    )
}

export default NameInput