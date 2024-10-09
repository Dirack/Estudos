"use client"

import { DispatchWithoutAction, Reducer, useReducer, useState } from "react";
import { listReducer } from "./reducers/listReducers";

export type Item = {
  id: number;
  task: string;
  done: boolean;
}

const Page = ()=>{

  const [list,dispatch] = useReducer(listReducer,[])

  const handleAddButton = ()=>{
    if(addField.trim() === '') return false
    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    })
    setAddField('')
  }

  const handleDoneCheckbox = (id: number)=>{
    dispatch({
      type: 'toggleDone',
      payload: {id}
    })
  }

  const [addField,setAddField] = useState('')

  const handleEdit = (id: number)=>{
    const item = list.find(it => it.id === id)
    if(!item) return false

    const newText = window.prompt('Editar Tarefa', item.task)
    if(!newText || newText.trim() === '') return false

    dispatch({
      type: 'editText',
      payload: {id, newText}
    })

    return true
  }

  const handleExcluir = (id: number)=>{
    if(!window.confirm("Tem certeza que deseja excluir?")) return false
    dispatch({
      type: 'remove',
      payload: { id }
    })
  }

  return (
    <div className="bg-black text-white w-screen h-screen p-4">
      <h1 className="text-center text-4xl my-4">LISTA DE TAREFAS</h1>
      <div className=" text-white max-w-2xl mx-auto flex rounded-md bg-gray-900 border-gray-400 p-4">
        <input
          type="text"
          className="flex-1 rounded-md border border-white p-3 bg-transparent text-white"
          placeholder="Digite um item..."
          value={addField}
          onChange={e => setAddField(e.target.value)}
        />
        <button
          className="p-4"
          onClick={handleAddButton}
          >ADICIONAR</button>
      </div>
      <div className="flex flex-col w-full items-center justify-center p-4">
        <ul className="flex flex-col gap-2">
          {list.map(item=>{
            return (
              <li key={item.id} className="max-w-2xl">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    className="w-6 h-6 mr-4 cursor-pointer"
                    checked={item.done}
                    onChange={()=>handleDoneCheckbox(item.id)}
                  />
                  <p>{item.id} - {item.task}</p>
                  <button onClick={() => handleEdit(item.id)}>Editar</button>
                  <button onClick={() => handleExcluir(item.id)}>Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Page