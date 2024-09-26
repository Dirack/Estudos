"use client"

import { useEffect } from "react"

const Square = ()=>{

    useEffect(()=>{
        console.log('Rodou o effect!')

        return ()=>{
            console.log('Rodou o cleanUp')
        }
    },[])

    return (
        <div className="w-40 h-40 bg-red-300"></div>
    )
}

export default Square