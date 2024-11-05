"use client"

import { useEffect, useState } from "react"

type User = {
  id: number;
  name: string;
}

const Page = ()=>{

  const [loading,setLoading] = useState(true)
  const [users,setUsers] = useState<User[]>([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp=>resp.json())
    .then(json=>setUsers(json))
    .catch(()=>console.log("Deu algum erro..."))
    .finally(()=>setLoading(false))

  },[])

  const handleAddNewPost = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
      method: 'POST',
      headers: {
        'Content-type':'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: 'post de teste',
        body: 'Corpo de teste',
        userId: 99
      })
    })

    const json = await res.json()

    console.log(json)
  }

  return (
    <div>

      <button onClick={handleAddNewPost} className="bg-yellow-500 rounded-md text-white font-bold p-2">Add</button>
      {loading && "Carregando..."}
      {!loading && users.length > 0 &&
            <ul>
              {users.map((item)=>{
                return (
                  <li key={item.id}>{item.name}</li>
                )
              })}
          </ul>
      }
      {!loading && users.length == 0 && "Não há usuários para exibir."}

    </div>
  )
}

export default Page