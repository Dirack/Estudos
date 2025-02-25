import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import NameInput from "./NameInput"
import { ChatInput } from "./ChatInput"
import ChatMessages from "./ChatMessages"

const Chat = ()=>{

    const userCtx = useContext(UserContext)

    if(!userCtx) return null
    if(!userCtx.user) return <NameInput />

    return (
        <div className="border border-white/30 rounded-md">
            <div className="h-96 p-3 overflow-y-scroll">
                <ChatMessages />
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={userCtx.user} />
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name="bot" />
            </div>
        </div>
    )
}

export default Chat