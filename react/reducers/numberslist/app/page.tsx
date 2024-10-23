"use client"

import { useEffect, useState } from "react"
import { NumberContextProvider } from "./context/NumberContext"
import Content from "./components/Content"

const Page = ()=>{

  return (
    <NumberContextProvider>
      <Content />
    </NumberContextProvider>
  )
}

export default Page