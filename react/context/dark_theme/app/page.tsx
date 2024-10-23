"use client"

import Container from "./components/Container"
import Switch from "./components/Switch"
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext"

const Page = ()=>{

  return (
    <ThemeContextProvider>
      <Container>
        <Switch />
      </Container>
    </ThemeContextProvider>

  )
}

export default Page