"use client"

import { useState } from "react"

const Page = ()=>{

  const [show,setShow] = useState<boolean>(false)

  const handleShow = ()=>{
    setShow(!show)
  }

  return (
    <div className="flex bg-gray-800 text-white w-screen h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-2">
        {show &&
              <div className="text-white">Área Secreta</div>
        }
        <button onClick={handleShow} className="bg-blue-500 text-white p-2 rounded">{show? 'Ocultar': 'Mostrar'}</button>
      </div>
    </div>
  )
}

export default Page