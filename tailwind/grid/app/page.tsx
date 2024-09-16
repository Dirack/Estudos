"use client"

const Page = ()=>{
  return (
    <div className="container mx-auto">
      <div className="p-3 rounded-md bg-gray-400">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          <div className="w-full h-60 bg-cover bg-center col-span-2 md:row-span-2 md:h-full bg-[url(https://www.decorfacil.com/wp-content/uploads/2017/09/20170907decoracao-de-apartamento-47.jpg)]"></div>
          <div className="w-full h-60 bg-cover bg-center bg-[url(https://www.decorfacil.com/wp-content/uploads/2017/09/20170907decoracao-de-apartamento-19.jpg)]"></div>
          <div className="w-full h-60 bg-cover bg-center bg-[url(https://www.decorfacil.com/wp-content/uploads/2017/09/20170907decoracao-de-apartamento-24.jpg)]"></div>
        </div>
        <div className="font-bold text-2xl mt-3">Título da página</div>
        <div className="flex mt-3 gap-2">
          <div className="rounded-full py-1 px-3 text-white bg-green-700">Campo</div>
          <div className="rounded-full py-1 px-3 text-white bg-green-700">Piscina</div>
          <div className="rounded-full py-1 px-3 text-white bg-green-700">Aleatório</div>
        </div>
      </div>
    </div>
  )
}

export default Page