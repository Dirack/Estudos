"use client"

import { redirect } from "next/navigation"


const Voltar = ()=>{

    const goback = ()=>{
        redirect("/")
    }

    return (
        <button onClick={goback}>Voltar</button>
    )
}

export default Voltar