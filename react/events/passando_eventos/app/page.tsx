"use client"

import Button from "./components/Button"

const Page = ()=>{

  const handleClick1 = () => alert('Clique aqui 1')
  const handleClick2 = () => alert('Clique aqui 2')
  const handleClick3 = () => alert('Clique aqui 3')

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="flex flex-col justify-between items-center">
        <Button className="mb-2" handleClick={handleClick1} label="Clique aqui 1" />
        <Button className="mb-2" handleClick={handleClick2} label="Clique aqui 2" />
        <Button className="mb-2" handleClick={handleClick3} label="Clique aqui 3" />
      </div>
    </div>
  )
}

export default Page