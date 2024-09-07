const Page = ()=>{
  return (
    <div className="w-screen h-screen p-3 bg-gray-900 text-white">
      <div className="mt-5">

        <h1 className="text-3xl font-bold text-center">Sistema de Login</h1>

        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField" >Endereço de Email:</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500" type="email" id="emailField" />
        </div>

        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="password">Senha:</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500" type="password" id="password" />
        </div>

        <div className="my-6">
          <button className="w-full p-2 rounded-md text-lg border-none text-white bg-yellow-500 font-bold">Entrar</button>
        </div>

        <div className="text-center text-gray-400">
          Não é membro? <a className="font-bold text-yellow-500" href="" >Faça seu cadastro agora</a>
        </div>

      </div>
    </div>
  )
}

export default Page