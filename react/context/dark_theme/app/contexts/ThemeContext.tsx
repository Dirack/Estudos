import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string)=>void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({children}:{children: ReactNode})=>{

    const [theme,setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    )

    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>useContext(ThemeContext)