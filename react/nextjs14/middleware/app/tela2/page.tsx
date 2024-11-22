"use client"

import { redirect } from "next/navigation"

const Page = ()=>{

    const handleVoltar = ()=>{
        redirect("/")
    }

    return (
        <div>
            <p>Eu sou a Page 2</p>
            <button onClick={handleVoltar}>Voltar</button>
        </div>
    )
}

export default Page