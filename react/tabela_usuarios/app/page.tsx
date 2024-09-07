import Tabela from "./components/tabela"
import { students } from "./students"

const Page = ()=>{
  return (
    <div>
      <Tabela students={students}/>
    </div>
  )
}

export default Page