"use client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import Content from "./content"

const Page = ()=>{

  return (
    <Provider store={store}>
      <Content />
    </Provider>
  )
}

export default Page