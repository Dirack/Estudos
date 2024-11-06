"use client"

import { useEffect, useRef, useState } from "react"

const Page = ()=>{

  const [legendInput,setLegendInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlefileSend = async ()=>{
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0){
      const fileItem = fileInputRef.current.files[0]
      const allowed = ['image/jpg','image/png','image/jpeg']

      if(allowed.includes(fileItem.type)){
        const data = new FormData()
        data.append('image',fileItem)
        data.append('legend',legendInput)

        const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          headers: {
            'Content-type':'multipart/form-data'
          },
          body: data
        })

        const json = await res.json()
        console.log(json)
      }

    }else{
      alert('Selecione um arquivo!')
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl">Upload de imagem</h1>

      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
        <input
          type="file"
          ref={fileInputRef}
        />
        <input
          type="text"
          placeholder="Digite uma legenda"
          className="p-3 bg-white rounded-md text-black"
          value={legendInput}
          onChange={e => setLegendInput(e.target.value)}
        />
        <button onClick={handlefileSend} className="bg-yellow-500 text-white rounded-md p-2">Enviar imagem</button>
      </div>

    </div>
  )
}

export default Page