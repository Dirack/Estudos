import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const List = ()=>{

    const userCtx = useContext(UserContext)

    return (
        <div>
            <ul>
                {userCtx?.users.map((item,index)=>{
                    return (
                        <li key={index}>{item} - <span className="cursor-pointer" onClick={()=>userCtx?.removeUser(item)}>[ Remover ]</span></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List