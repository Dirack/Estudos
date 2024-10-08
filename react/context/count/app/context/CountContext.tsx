import { ReactNode, createContext, useState } from "react";


type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number)=>void;
}

export const CountContext = createContext<null | CountContextType>(null)

type Props = {children:ReactNode}

export const CountProvider = ({children}:Props)=>{
    const [onlineCount,setOnlineCount] = useState(45)

    return (
        <CountContext.Provider value={{onlineCount,setOnlineCount}}>
            {children}
        </CountContext.Provider>
    )
}