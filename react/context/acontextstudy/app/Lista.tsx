import { useContext, useState } from "react"
import { UsersContext } from "./UsersContext"

const Lista = ()=>{

    const UsersCtx = useContext(UsersContext)

    const [newUser,setNewUser] = useState('')

    const handleAddUser = ()=>{
        let usersList: string[] = []
        if(UsersCtx?.users) usersList = [...UsersCtx?.users, newUser]
        UsersCtx?.setUsers(usersList)
        setNewUser('')
    }

    return (
        <div>
            <ul>
                {UsersCtx?.users &&
                UsersCtx.users.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <div className="mt-2 flex flex-col gap-2">
                <input value={newUser} onChange={e => setNewUser(e.target.value)} type="text" className="text-black rounded-md p-2" />
                <button onClick={handleAddUser} className="bg-yellow-500 font-bold p-2 rounded-md">Add</button>
            </div>
        </div>
    )
}

export default Lista