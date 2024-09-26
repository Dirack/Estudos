"use client"

import { useState } from "react";

type List = {
  id: number;
  task: string;
  done: boolean;
}

const Page = ()=>{

  const [list,setList] = useState<List[]>([])

  const add = (text: string)=>{
    let newList: List[] = [...list,{id:list.length,task:text,done:false}]
    setList(newList)
  }

  const edit = (id: number, newText: string)=>{
    setList(
      list.map((t) => {
        if(t.id === id) t.task = newText
        return t
      })
    )
  }

  const toogle = (id: number)=>{
    setList(
      list.map((t) => {
        if (t.id === id) t.done = !t.done
        return t
    })
    )
  }

  const remove = (id: number)=>{
    setList(list.filter(t => t.id != id))
  }

  return (
    <div>
      ...
    </div>
  )
}

export default Page