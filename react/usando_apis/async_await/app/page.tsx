"use client"

import { useEffect, useState } from "react"

type User = {
  id: number;
  name: string;
}

const Page = ()=>{

  const [loading,setLoading] = useState(true)
  const [users,setUsers] = useState<User[]>([])

  const getUsers = async ()=> {
    setLoading(true)

    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const json = await res.json()
      setUsers(json)
    }catch(err){
      console.log('Deu algo errado: ', err)
    }

    setLoading(false)
  }

  useEffect(()=>{

    getUsers()

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