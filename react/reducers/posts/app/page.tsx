"use client"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Posts from "./components/Posts"
import { PostProvider } from "./contexts/PostContext"

const Page = ()=>{
  return (
    <PostProvider>
      <div className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center">
        <Header />
        <Posts />
        <Footer />
      </div>
    </PostProvider>

  )
}

export default Page