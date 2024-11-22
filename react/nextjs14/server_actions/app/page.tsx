"use client"

import { getPosts } from "./actions/get-posts"

const Page = ()=>{

  
  const carregar = async ()=>{
      const data = await getPosts()
      console.log(data)
  }

  return (
    <div>
      <button onClick={carregar}>Carregar</button>
    </div>
  )
}

export default Page