import { ReactNode, createContext, useState } from "react";

type NumbersContextType = {
    numbers: number[];
    setNumbers: (numbers: number[])=>void;
}

export const NumbersContext = createContext<NumbersContextType | null>(null)

export const NumbersContextProvider = ({children}:{children: ReactNode})=>{
    const [numbers,setNumbers] = useState<number[]>([])
    return (
        <NumbersContext.Provider value={{numbers,setNumbers}}>
            {children}
        </NumbersContext.Provider>
    )
}