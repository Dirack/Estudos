import { useContext, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";

type Props = {
    name: string;
}

export const ChatInput = ({name}: Props)=>{

    const chatCtx = useContext(ChatContext)
    const [textInput,setTextInput] = useState('')

    const handleKeyUpAction = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.code.toLowerCase() == 'enter'){
            if(textInput.trim() != ''){
                chatCtx?.addMessage(name,textInput.trim())
                setTextInput('')
            }
        }
    }

    return (
        <input
            type="text"
            className="w-full bg-transparent text-white text-md outline-none"
            placeholder={`${name}, digite uma mensagem (e aperte enter)`}
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
        />
    )
}