import { Form } from "./components/receber-dados"

const Page = ()=>{
  return (
    <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-2xl font-bold">Digite seus dados</h1>
      <Form />
    </div>
  )
}

export default Page