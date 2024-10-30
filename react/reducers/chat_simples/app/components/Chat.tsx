import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import NameInput from "./NameInput"

const Chat = ()=>{

    const userCtx = useContext(UserContext)

    if(!userCtx) return null
    if(!userCtx.user) return <NameInput />

    return (
        <div className="border border-white/30 rounded-md">
            ...
        </div>
    )
}

export default Chat