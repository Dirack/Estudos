import { ReactNode, useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Container = ({children}:{children:ReactNode})=>{

    let themeCtx = useContext(ThemeContext)

    return (
        <div className="h-screen w-screen bg-white text-black dark:bg-gray-800 flex flex-col items-center justify-center dark:text-white">
            {children}
        </div>
    )

}

export default Container
