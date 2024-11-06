"use client"

import axios from "axios"
import { useEffect, useState } from "react"

const Page = ()=>{

  const handleAddPost = async ()=>{
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts",{
      userId: 98,
      title: 'Título do post',
      body: 'Corpo do post'
    })

    console.log(res.data)
  }


  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <button className="bg-yellow-500 rounded-md text-white font-bold p-2" onClick={handleAddPost}>Inserir Post</button>
    </div>
  )
}

export default Page