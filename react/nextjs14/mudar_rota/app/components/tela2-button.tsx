"use client"

import { useRouter } from "next/navigation"



const Tela2Button = ()=>{

    const router = useRouter()

    const handleGo = ()=>{
        router.push('/tela2')
    }

    return (
        <button onClick={handleGo}>Ir para tela 2</button>
    )
}

export default Tela2Button