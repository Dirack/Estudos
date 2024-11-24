const Page = ()=>{

  async function receberDados(formData: FormData){
    "use server"

    let name = formData.get('name')
    let age = formData.get('age')

    console.log("Name:",name)
    console.log("Age:",age)
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Enviar para o console do node</h1>
      <form className="flex gap-2 border m-2 p-4" action={receberDados}>
        <input className="rounded-md p-2" type="text" name="name" placeholder="Digite seu nome..."/>
        <input className="rounded-md p-2" type="number" name="age" placeholder="Digite a sua idade..." />
        <input className="bg-yellow-500 text-white font-bold rounded-md p-4" type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Page