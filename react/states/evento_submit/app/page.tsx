"use client"

import { FormEvent } from "react"

const Page = ()=>{

  const handleForm = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    alert('Submited...')
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800">
      <form onSubmit={handleForm} className="bg-gray-500 text-white text-bold rounded flex flex-col gap-2 p-4">
        <label>Login:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <input className="bg-yellow-500 rounded" type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Page