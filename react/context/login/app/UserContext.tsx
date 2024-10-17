import { ReactNode, createContext, useState } from "react";

type ContextType = {
    name: string;
    setName: (n: string)=>void;
}

export const UserContext = createContext<ContextType | null>(null)

export const UserContextProvider = ({children} : {children: ReactNode})=>{
    const [name,setName] = useState('Rodolfo')
    return (
        <UserContext.Provider value={{name,setName}}>{children}</UserContext.Provider>
    )
}