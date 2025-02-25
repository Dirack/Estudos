import { useContext } from "react"
import { ChatContext } from "../contexts/ChatContext"
import { UserContext } from "../contexts/UserContext"

const ChatMessages = ()=>{

    const chatCtx = useContext(ChatContext)
    const userCtx = useContext(UserContext)

    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map((item,index)=>{
                return (
                    <div key={index} className={`border border-white/20 rounded-md p-2 text-sm
                        ${item.user === userCtx?.user ?
                            'self-end bg-white/10 text-right' :
                            'self-start bg-white/5 text-left'
                        }`}>
                        <h1 className="font-bold">{item.user}</h1>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatMessages