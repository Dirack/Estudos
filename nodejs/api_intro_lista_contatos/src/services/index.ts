import {readFile, writeFile} from 'fs/promises'

let dataSource = './contatos.txt'

export const getContatos = async ()=>{

    var lista: string[] = []
    
    try{

    let contatos = await readFile(dataSource,{encoding:"utf8"})
    lista = contatos.split('\n')

    }catch(err){}
    
    return lista
}

export const addContato = async (name: string)=>{
    let lista:string[] = await getContatos()

    lista.push(name)
    await writeFile('./contatos.txt',lista.join('\n'))
}

export const deleteContato = async (name: string)=>{
    var lista: string[] = await getContatos()

    lista = lista.filter(item => item.toLowerCase() != name.toLowerCase())

    await writeFile('./contatos.txt',lista.join('\n'))
}