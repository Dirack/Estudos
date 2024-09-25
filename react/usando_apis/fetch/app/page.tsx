"use client"

import { useEffect, useState } from "react"

type User = {
  id: number;
  name: string;
}

const Page = ()=>{

  const [users,setUsers] = useState<User[]>([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp=>resp.json())
    .then(json=>setUsers(json))

  },[])

  return (
    <div>
      {users.length > 0 &&
            <ul>
              {users.map((item)=>{
                return (
                  <li key={item.id}>{item.name}</li>
                )
              })}
          </ul>
      }

    </div>
  )
}

export default Page