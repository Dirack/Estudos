import Link from "next/link"
import Tela2Button from "./components/tela2-button"

const Page = ()=>{
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Página inicial</h1>

      <div className="flex flex-col gap-2">
        <div>
          <Link href={"/tela1"}>Ir para tela 1</Link>
        </div>
        <div>
          <Tela2Button></Tela2Button>
        </div>
      </div>
    </div>
  )
}

export default Page