import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"

const Header = ()=>{

    const userCtx = useContext(UserContext)

    const [userInput,setUserInput] = useState('')

    const handleAddUser = ()=>{
        userCtx?.addUser(userInput)
        setUserInput('')
    }

    return (
        <div className="text-2xl text-bold">
            <div>Título da página</div>
            <div className="my-2 flex flex-row gap-2">
                <input type="text" className="rounded-md text-black p-2" placeholder="Digite algo..."
                value={userInput} onChange={e => setUserInput(e.target.value)} />
                <button onClick={handleAddUser} className="bg-yellow-500 font-bold rounded-md p-2">Add</button>
            </div>
        </div>
    )
}

export default Header