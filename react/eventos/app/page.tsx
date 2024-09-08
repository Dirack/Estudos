"use client"

const Page = ()=>{

  const handleClick = ()=>{
      alert("oi")
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={handleClick} className="bg-blue-400 text-white rounded p-2">Clique</button>
    </div>
  )
}

export default Page