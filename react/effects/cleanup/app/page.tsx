"use client"

import { StrictMode, useState } from "react"
import Square from "./components/Square"

const Page = ()=>{

  const [showSquare,setShowSquare] = useState(false)

  return (
    <StrictMode>
    <div>
      <button onClick={() => setShowSquare(!showSquare)}>Mostrar/Ocultar</button>
      {showSquare && <Square />}
    </div>
    </StrictMode>
  )
}

export default Page