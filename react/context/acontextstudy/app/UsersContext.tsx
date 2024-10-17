import { ReactNode, createContext, useState } from "react";

type UserContextType = {
    users: string[];
    setUsers: (users: string[])=>void;
}

export const UsersContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children}:{children: ReactNode})=>{
    const [users,setUsers] = useState<string[]>(['Rodolfo','Fulano','Beltrano'])
    return (
        <UsersContext.Provider value={{users,setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}