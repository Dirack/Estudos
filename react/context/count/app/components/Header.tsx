import { useContext } from "react"
import { CountContext } from "../context/CountContext"

const Header = ()=>{

    const countCtx = useContext(CountContext)

    const handleCount = ()=>{
        countCtx?.setOnlineCount(0)
    }

    const sum = ()=>{
        countCtx?.setOnlineCount(countCtx?.onlineCount+1)
    }

    return (
        <div className="bg-gray-400 flex flex-col items-center justify-center w-screen h-screen text-white font-bold">
            <p>Value: {countCtx?.onlineCount}</p>
            <div className="flex flex-row gap-2 mt-2">
                <button onClick={sum} className="bg-yellow-500 text-white rounded-md p-4">Add</button>
                <button onClick={handleCount} className="bg-yellow-500 text-white rounded-md p-4">Zerar</button>
            </div>
        </div>
    )
}

export default Header