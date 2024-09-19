"use client"

import { PhotoList } from "@/data/PhotoList"

const Page = ()=>{
  return (
    <div>
      <h1 className="text-center text-3xl text-bold my-10">Fotos intergaláticas</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PhotoList.map((item)=>{
          return (
            <div>...</div>
          )
        })}
      </section>
    </div>
  )
}

export default Page