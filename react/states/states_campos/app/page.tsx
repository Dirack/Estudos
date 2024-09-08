"use client"

import { useState } from "react"

const Page = ()=>{

  const [nome,setNome] = useState('')

  const handleInput = ()=>{
      setNome(nome)
  }

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center text-white text-bold">
      <div>
        <input className="text-black mb-2"
          onChange={e => setNome(e.target.value)}
          value={nome}
          type="text"
          placeholder="Digite o seu nome..." />
        <div>Seu nome é: {nome}</div>
      </div>
    </div>
  )
}

export default Page