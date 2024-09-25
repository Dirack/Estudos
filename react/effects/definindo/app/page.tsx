"use client"

import { useEffect, useState } from "react"

const Page = ()=>{

  const [name,setName] = useState('')
  const [age,setAge] = useState<number | null>(null)

  useEffect(()=>{
    console.log('Rodou o effect!')
  },[name])

  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <h1>Meu nome é '{name}' e minha idade é '{age}' anos</h1>
      <hr></hr>
      <div className="flex">
        <div className="bg-blue-600 p-2 rounded-md m-2 cursor-pointer" onClick={() => setName('Rodolfo')}>Set nome</div>
        <div className="bg-blue-600 p-2 rounded-md m-2 cursor-pointer" onClick={() => setName('')}>Unset nome</div>
        <div className="bg-yellow-500 p-2 rounded-md m-2 cursor-pointer" onClick={()=>setAge(10)}>Set age</div>
        <div className="bg-yellow-500 p-2 rounded-md m-2 cursor-pointer" onClick={()=>setAge(null)}>Unset age</div>
      </div>
    </div>
  )
}

export default Page