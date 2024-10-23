import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { NumberReducer } from "../reducers/NumberReducer";

type NumberContextType = {
    numbers: number[];
    addNumber: (number: number)=>void;
    removeNumber: (id: number)=>void;
}

export const NumberContext = createContext<NumberContextType | null>(null)

export const NumberContextProvider = ({children}:{children: ReactNode})=>{

    const [numbers,dispatch] = useReducer(NumberReducer,
        JSON.parse(localStorage.getItem('lista') || '[]')
    )

    useEffect(()=>{
        localStorage.setItem('lista',JSON.stringify(numbers))
    },[numbers])

    const addNumber = (number: number)=>{
        dispatch({
            type: 'add',
            payload: {number}
        })
    }

    const removeNumber = (id: number)=>{
        dispatch({
            type: 'remove',
            payload: { id }
        })
    }

    return (
        <NumberContext.Provider value={{numbers,addNumber, removeNumber}}>
            {children}
        </NumberContext.Provider>
    )
}