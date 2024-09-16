"use client"

const Page = ()=>{
  return (
    <div className="container mx-auto">

      <table className="w-full mx-2">
        <thead>
          <tr className="border-b text-left text-sm border-gray-200">
            <th className="py-2">Nome</th>
            <th className="hidden md:table-cell">Título</th>
            <th className="hidden md:table-cell">Email</th>
            <th>Função</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@gmail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@gmail.com</td>
            <td>Membro</td>
            <td>
              <a href="">Editar</a>
            </td>
          </tr>

          <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@gmail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@gmail.com</td>
            <td>Membro</td>
            <td>
              <a href="">Editar</a>
            </td>
          </tr>

          <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@gmail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@gmail.com</td>
            <td>Membro</td>
            <td>
              <a href="">Editar</a>
            </td>
          </tr>

          <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@gmail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@gmail.com</td>
            <td>Membro</td>
            <td>
              <a href="">Editar</a>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default Page