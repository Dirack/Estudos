import {readFile, unlink, writeFile} from 'fs/promises'

const exec = async ()=>{

    console.log('Escrever...')
    await writeFile('./teste.txt','testando 1, 2, 3')
    console.log('Pronto')
}

const exec2 = async ()=>{

    let listUsers = ['Rodolfo','Pedro','Guilherme']
    console.log('Escrevendo arquivo de usuários...')
    await writeFile('./teste2.txt',listUsers.join('\n'))
    console.log('Pronto!')

    console.log('Lendo arquivo de usuários...')
    const fileContent = await readFile('./teste2.txt',{encoding: "utf8"})
    console.log(fileContent.split('\n'))
}

const exec3 = async ()=>{

    const fileContent = await readFile('./teste2.txt',{encoding: "utf8"})
    const list = fileContent.split("\n")
    list.push('Fulano')
    await writeFile('./teste2.txt',list.join('\n'))
}

const exec4 = async ()=>{

    console.log("Criando arquivo lixo...")
    await writeFile('./lixo.txt','Oi meu patrão')
    console.log('Deletando arquivo lixo...')
    await unlink('./lixo.txt')
}

exec()
exec2()
exec3()
exec4()