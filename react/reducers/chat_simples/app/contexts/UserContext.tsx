import { ReactNode, createContext, useContext, useState } from "react";

type UserContextType = {
    user: string;
    setUser: (user: string)=>void;
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children}:{children: ReactNode})=>{

    const [user,setUser] = useState('')

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = useContext(UserContext)