"use client"

import Header from "./Header"
import { UserContextProvider } from "./UserContext"

const Page = ()=>{
  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center text-white h-screen w-screen">
      <UserContextProvider>
        <Header />
      </UserContextProvider>
    </div>
  )
}

export default Page