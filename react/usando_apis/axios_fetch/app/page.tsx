"use client"

import axios from "axios"

const Page = ()=>{

  const handleGetPosts = ()=>{

    const requestParams = {
      postId: 1,
      sort: 'desc'
    }

    axios.get('https://jsonplaceholder.typicode.com/comments',{
      params: requestParams
    })
    .then((response) => {
      console.log(response.data)
    })
  }

  return (
    <div className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <button onClick={handleGetPosts} className="bg-yellow-500 rounded-md font-bold text-white p-2">Pegar Posts</button>
    </div>
  )
}

export default Page