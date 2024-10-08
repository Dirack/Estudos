"use client"

import { useState } from "react"
import Header from "./components/Header"
import { CountContext, CountProvider } from "./context/CountContext"

const Page = ()=>{

  const [onlineCount,setOnlineCount] = useState(92)

  return (
    <div>
      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  )
}

export default Page