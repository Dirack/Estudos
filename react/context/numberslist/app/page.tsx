"use client"

import Numbers from "./Numbers"
import { NumbersContextProvider } from "./NumbersContext"

const Page = ()=>{
  return (
    <div className="h-screen w-screen flex flex-row bg-gray-800 text-white items-center justify-center">
      <NumbersContextProvider>
        <Numbers />
      </NumbersContextProvider>
    </div>
  )
}

export default Page