import { ReactNode, useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Container = ({children}:{children:ReactNode})=>{

    let themeCtx = useContext(ThemeContext)

    if(themeCtx?.theme === 'dark'){
        return (
            <div className="h-screen w-screen bg-gray-800 flex flex-col items-center justify-center text-white">
                {children}
            </div>
        )
    }else{
        return (
            <div className="h-screen w-screen bg-white flex flex-col items-center justify-center text-black">
                {children}
            </div>
        )
    }

}

export default Container
