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
        className={`p-2 rounded-md ${themeCtx?.theme === 'light'? 'bg-white text-black border border-gray-400':'bg-black text-white'}`}>
            {themeCtx?.theme === 'light'? 'Mudar para dark': 'Mudar para light'}
        </button>
    )
}

export default Switch