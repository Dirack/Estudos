"use client"

import Chat from "./components/Chat"
import { ChatProvider } from "./contexts/ChatContext"
import { UserContextProvider } from "./contexts/UserContext"

const Page = ()=>{
  return (
    <div className="bg-gray-800 text-white h-screen w-screen">
      <div className="container mx-auto max-w-lg px-2">
        <UserContextProvider>
          <ChatProvider>
            <h1 className="text-3xl my-3 text-center">Chat Simples</h1>

            <Chat />
          </ChatProvider>
        </UserContextProvider>
      </div>
    </div>
  )
}

export default Page