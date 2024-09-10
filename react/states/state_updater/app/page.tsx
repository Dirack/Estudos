"use client"

import { useState } from "react"

const Page = ()=>{

  const [valor,setValor] = useState(0)

  const handleValor = ()=>{
    setValor(v => v + 2)
    setValor(v => v + 2)
    setValor(v => v + 2)
  }

  return (
    <div className="w-screen h-screen text-white bg-gray-800 flex items-center justify-center flex-col gap-2">
      <div>{valor}</div>
      <button onClick={handleValor} className="bg-blue-500 rounded p-2">+2</button>
    </div>
  )
}

export default Page