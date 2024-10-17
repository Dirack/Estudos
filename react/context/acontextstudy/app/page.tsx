"use client"

import Lista from "./Lista"
import { UserContextProvider } from "./UsersContext"

const Page = ()=>{
  return (
    <div className="h-screen w-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <UserContextProvider>
        <Lista />
      </UserContextProvider>
    </div>
  )
}

export default Page