"use client"

import Modal from "@/components/Modal"
import PhotoItem from "@/components/PhotoItem"
import { PhotoList } from "@/data/PhotoList"
import { useState } from "react"

const Page = ()=>{

  const [showModal,setShowModal] = useState(false)

  const [imageOfModal,setImageOfModal] = useState('')


  const openModal = (id: number)=>{

    let photo = PhotoList.find(item => item.id === id)
    if(photo){
      setShowModal(true)
      setImageOfModal(photo.url)
    }

  }

  const closeModal = ()=>{
    setShowModal(false)
  }

  return (
    <div>
      <h1 className="text-center text-3xl text-bold my-10">Fotos intergaláticas</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {PhotoList.map((item)=>{
          return (
            <PhotoItem
              key={item.id}
              photo={item}
              onClick={()=>openModal(item.id)}
            />
          )
        })}
      </section>
      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal} />
      }
    </div>
  )
}

export default Page