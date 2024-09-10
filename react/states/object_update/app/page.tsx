"use client"

import { useState } from "react"

type Person = {
  nome: string;
  sobrenome: string;
}

const Page = ()=>{

  const [nomeCompleto,setNomeCompleto] = useState<Person>({nome:'',sobrenome:''})

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex items-center justify-center flex-col gap-2">
      
      <input 
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3 "
        value={nomeCompleto.nome}
        onChange={e => setNomeCompleto({...nomeCompleto, nome: e.target.value})} />

      <input
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={nomeCompleto.sobrenome}
        onChange={e => setNomeCompleto({...nomeCompleto, sobrenome: e.target.value})}/>

      <div>
        Meu nome completo é: {nomeCompleto.nome} {nomeCompleto.sobrenome}
      </div>
    </div>
  )
}

export default Page