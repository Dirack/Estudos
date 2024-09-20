"use client"

import { useState } from "react"
import Ball, { Color } from "./components/Balls/Ball"
import Button, { Eliminate } from "./components/Button/Button"

type GetColor = () => Color

const Page = ()=>{

  const [ballsList,setBallsList] = useState<Color[]>([])

  const getColor: GetColor = ()=>{
    let num = Math.round(Math.random() * 5)
    switch(num){
      case 0: return 'yellow'
      case 1: return 'blue'
      case 2: return 'red'
      case 3: return 'green'
      case 4: return 'gray'
    }
    return 'green'
  }

  const generate = ()=>{
    let newBallsList: Color[] = [...ballsList]
    for(let i=0; i<100; i++){
      newBallsList[i] = getColor()
    }
    setBallsList(newBallsList)
  }

  const eliminate: Eliminate = (color: Color)=>{
    let newBallsList: Color[] = [...ballsList]
    newBallsList = newBallsList.filter((e)=>e!=color)
    setBallsList(newBallsList)
  }

  let ColorsList: Color[] = ['yellow','red','blue','gray','green']

  return (
    <div className="w-screen h-screen bg-indigo-800 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-white text-5xl">Eliminate!</h1>
      <div className="w-96 h-96 bg-white flex flex-wrap p-2 rounded">
        {ballsList.map((item, index)=>{
          return (
            <Ball key={index} color={item} />
          )
        })}
      </div>
      <div className="flex gap-2">
        <div
          className="text-white bg-purple-500 p-2 rounded mt-2 hover:bg-purple-400 hover:cursor-pointer transition-all"
          onClick={generate}
        >
          Generate
        </div>

        {ColorsList.map((e)=>{
          return (
            <Button color={e} eliminate={eliminate} />
          )
        })}
      </div>
    </div>
  )
}

export default Page