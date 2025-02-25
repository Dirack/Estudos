"use client"

import { useState } from "react";

type TodoItem = {
  label: string;
  checked: boolean;
}

const Page = ()=>{

  const [listInput,setListInput] = useState('')

  const [list,setList] = useState<TodoItem[]>([
    {label: 'Fazer dever de casa', checked: false},
    {label: 'Compra o bolo', checked: true}
  ])
  
  const handleList = ()=>{
    if (listInput.trim()=== '') return
    setList([
      ...list,
      {label:listInput, checked: false}
    ])
    setListInput('')
  }

  const deletarItem = (index:number)=>{
    setList(
      list.filter((item,key) => key !== index)
    )
  }

  const toggleItem = (index:number)=>{
    let newList = [...list]
    newList[index].checked = !newList[index].checked
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
        {list.map((item, index)=>{
            return (
              <li key={index}>
                <input onClick={() => toggleItem(index)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
                {item.label} - <button onClick={() => deletarItem(index)} className="hover:underline">[ deletar ]</button></li>
            )
        })}
      </ul>
    </div>
  )
}

export default Page