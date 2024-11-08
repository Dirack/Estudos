"use client"

import axios from "axios"
import { useRef } from "react"

const Page = ()=>{

  const controller = new AbortController()

  const handleStartRequest = async ()=>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
        signal: controller.signal
      })
    }catch(err){
      console.log('Deu algum problema...')
    }
  }

  const handleCancelRequest = ()=>{
    controller.abort()
  }

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <div className="flex gap-2">
        <button onClick={handleStartRequest} className="bg-yellow-500 font-bold p-2 rounded-md">Fazer</button>
        <button onClick={handleCancelRequest} className="bg-yellow-500 font-bold p-2 rounded-md">Cancelar</button>
      </div>
    </div>
  )
}

export default Page