import { ReactNode, createContext } from "react";
import { Message } from "../types/Message"

type ChatContextType = {
    chat: Message[];
    addMessage: (user: string, text: string)=>void;
}

export const ChatContext = createContext<ChatContextType | null>(null)

export const ChatProvider = ({children}:{children: ReactNode})=>{
    return (
        <ChatContext.Provider>
            {children}
        </ChatContext.Provider>
    )
}