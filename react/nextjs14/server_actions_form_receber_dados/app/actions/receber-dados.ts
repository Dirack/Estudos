"use server"

export async function receberDados(prevState: any, formData: FormData){

    let name = formData.get('name')
    let age = parseInt(formData.get('age') as string)

    if(age < 18){
        return {
            msg: 'Usuário é de menor!'
        }
    }

    return {msg:''}
}