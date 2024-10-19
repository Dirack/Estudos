"use client"

import { useEffect, useState } from "react"

const Page = ()=>{

  const [numberList,setNumberList] = useState<number[]>([])

  useEffect(()=>{
    let stringlist = localStorage.getItem('lista')
    let lista: number[] = []
    if(stringlist){
      lista = JSON.parse(stringlist)
      setNumberList(lista)
    }
  },[])

  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex flex-col items-center">
      <ul>
        {numberList &&
          numberList.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Page