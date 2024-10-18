"use client"

import Footer from "./components/Footer"
import Header from "./components/Header"
import List from "./components/List"
import { UserContext, UserProvider } from "./contexts/UserContext"

const Page = ()=>{
  return (
    <UserProvider>
      <div className="w-screen h-screen bg-gray-800 flex flex-col text-white items-center pt-4">
        <Header />
        <List />
        <Footer />
      </div>
    </UserProvider>
  )
}

export default Page