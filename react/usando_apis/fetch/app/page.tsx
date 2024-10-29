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

  return (
    <div>
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