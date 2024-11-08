"use client"

import axios from "axios"
import { useRef } from "react"

const Page = ()=>{

  const fileInput = useRef<HTMLInputElement>(null)

  const handleSendFile = async ()=>{
    if(fileInput.current?.files && fileInput.current.files.length > 0){
      const file = fileInput.current.files[0]

      const data = new FormData()
      data.append('name','Rodolfo')
      data.append('file',file)

      const response = await axios.post('https://jsonplaceholder.typicode.com/posts',data)
      console.log(response)
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <div className="border border-gray-200 flex flex-col items-center justify-center gap-4 p-5 rounded-md">
        <input
          ref={fileInput}
          type="file"
        />
        <button className="bg-yellow-500 rounded-md font-bold p-2" onClick={handleSendFile}>Enviar</button>
      </div>
    </div>
  )
}

export default Page