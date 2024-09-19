"use client"

import { useState } from "react";

type TodoItem = {
  id: number;
  label: string;
  checked: boolean;
}

const Page = ()=>{

  const [listInput,setListInput] = useState('')

  const [list,setList] = useState<TodoItem[]>([
    {id: 1, label: 'Fazer dever de casa', checked: false},
    {id: 2, label: 'Compra o bolo', checked: true}
  ])
  
  const handleList = ()=>{
    if (listInput.trim()=== '') return
    setList([
      ...list,
      {id: list.length + 1, label:listInput, checked: false}
    ])
    setListInput('')
  }

  const deletarItem = (id:number)=>{
    setList(
      list.filter((item) => item.id !== id)
    )
  }

  const toggleItem = (id:number)=>{
    let newList = [...list]
    for(let i in newList){
      if(newList[i].id === id)
        newList[i].checked = !newList[i].checked
    }
 
    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl text-white bg-gray-800 gap-2">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>

      <div className="flex flex-col w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-gray-100 gap-2">
        <input
          type="text"
          placeholder="Adicionar novo item..."
          className="rounded-md p-1 text-black"
          value={listInput}
          onChange={e => setListInput(e.target.value)} />
        <button onClick={handleList} className="bg-yellow-500 rounded">Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item)=>{
            return (
              <li key={item.id}>
                <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
                {item.label} - <button onClick={() => deletarItem(item.id)} className="hover:underline">[ deletar ]</button></li>
            )
        })}
      </ul>
    </div>
  )
}

export default Page