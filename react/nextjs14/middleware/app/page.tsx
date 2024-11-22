import Link from "next/link"

const Page = ()=>{
  return (
    <div className="flex flex-col gap-2">
      <Link href={"/tela1"}>Ir para tela1</Link>
      <Link href={"/tela2"}>Ir para tela2</Link>
    </div>
  )
}

export default Page