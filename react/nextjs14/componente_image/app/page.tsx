import Image from "next/image"
import Link from "next/link"

const Page = ()=>{

  return (
    <div>
      <h1>Página Inicial</h1>

      <Image
        src={'/img.png'}
        width={200}
        height={100}
        quality={100}
        alt="oi"
      />
    </div>
  )
}

export default Page