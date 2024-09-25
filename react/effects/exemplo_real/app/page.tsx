"use client"

import { useState } from "react"
import Video from "./components/Video"

const Page = ()=>{

  const [playing,setPlaying] = useState(false)

  return (
    <div className="bg-gray-800 w-screen h-screen flex flex-col items-center justify-center text-white">
      <div className="border border-white p-3 flex flex-col gap-2">
        <p >{playing?'RODANDO':'PAUSADO'}</p>
        <button className="bg-yellow-500 p-2 rounded-md" onClick={()=>setPlaying(!playing)}>Start/Stop</button>
      </div>
      
      <Video isPlaying={playing} src="avideo.mp4" />
    </div>
  )
}

export default Page