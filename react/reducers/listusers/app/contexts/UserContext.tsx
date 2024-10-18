import { ReactNode, createContext, useReducer, useState } from "react";
import { UserReducer } from "../reducers/UserReducer";

type UserContextType = {
    users: string[];
    addUser: (user: string)=>void;
    removeUser: (user: string)=>void;
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({children}:{children: ReactNode})=>{
    const [users,dispatch] = useReducer(UserReducer,[])

    const addUser = (user: string)=>{
        dispatch({
            type: 'add',
            payload: {user},
        })
    }

    const removeUser = (user: string)=>{
        dispatch({
            type: 'remove',
            payload: {user}
        })
    }

    return (
        <UserContext.Provider value={{users,addUser, removeUser}}>
            {children}
        </UserContext.Provider>
    )
}