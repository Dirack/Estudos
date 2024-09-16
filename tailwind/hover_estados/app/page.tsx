"use client"

const Page = ()=>{
  return (
    <>
    <div className="container mx-auto">

      <button className="p-2 bg-red-200 hover:bg-blue-200 active:bg-green-200">Clique aqui!</button>
      <input type="text" className="border-gray-800 w-full border-2 focus:bg-green-400 text-white" />
    </div>

    <div className="group/coisa bg-blue-100 p-3 hover:bg-green-800">
      <p className="text-black group-hover/coisa:text-white">Texto 1</p>
      <p className="text-gray-500 group-hover/coisa:text-white">Texto 2</p>
    </div>
    </>
  )
}

export default Page