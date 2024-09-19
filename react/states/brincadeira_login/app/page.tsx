"use client"

import { FormEvent, useState } from "react";

type LockerImg = '🔒' | '🔓'

type LockerState = 'locked' | 'unlocked'

type Locker = {
  img: LockerImg;
  state: LockerState;
}

const Page = ()=>{

  const [locker,setLocker] = useState<Locker>({img:'🔒',state:'locked'})

  const [user,setUser] = useState<string>('')

  const [password,setPassword] = useState<string>('')

  const [key,setKey] = useState<string>('Unlock')

  const lockedUnlocked = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(user === 'rodolfo' && password === '12345'){
      console.log({user,password})
      setLocker({img:'🔓',state:'unlocked'})
      setUser('')
      setPassword('')
      setKey('Lock')
    }else{
      setLocker({img:'🔒',state:'locked'})
      setKey('Unlock')
    }
  }

  return (
    <div className="w-screen h-screen text-white flex flex-col items-center justify-center bg-gray-800">
      <div className="text-5xl">Is {locker.state}</div>
      <div className="w-10 h-10 m-3 p-2 bg-gray-400 rounded">{locker.img}</div>
      <div className="bg-gray-900 p-4 rounded-md flex flex-col">
        <h1 className="text-3xl">Sisteminha de Login</h1>
        <form onSubmit={lockedUnlocked} className="flex flex-col gap-3">
          <label>Login</label>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            className="text-black p-2"
          />
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="text-black p-2"
          />
          <input type="submit" value={key} className="w-full p-2 rounded text-white cursor-pointer bg-yellow-500 hover:bg-yellow-400 transition-all" />
        </form>
      </div>
    </div>
  )
}

export default Page