import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Switch = ()=>{

    let themeCtx = useContext(ThemeContext)

    const handleSwitchTheme = ()=>{
        themeCtx?.setTheme(themeCtx?.theme === 'light'? 'dark' : 'light')
    }

    return (
        <button
        onClick={handleSwitchTheme}
        className="bg-white text-black border border-gray-400 dark:bg-black dark:text-white">
            {themeCtx?.theme === 'light'? 'Mudar para dark': 'Mudar para light'}
        </button>
    )
}

export default Switch