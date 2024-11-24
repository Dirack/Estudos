"use client"

import { useFormState, useFormStatus } from "react-dom"
import { receberDados } from "../actions/receber-dados"

const initialState = {
    msg: ''
}

export const Form = ()=>{
    const [state,formAction] = useFormState(receberDados,initialState)

    const {pending} = useFormStatus()

    return (
        <form className="border p-4 rounded-md flex flex-col gap-2" action={formAction}>
            <input className="p-2 rounded-md" type="text" name="name" placeholder="Digite o seu nome..." />
            <input className="p-2 rounded-md" type="number" name="age" placeholder="Digite a sua idade..."/>
            <input disabled={pending} className="bg-yellow-500 text-white font-bold p-4 rounded-md" type="submit" value="Enviar" />
            <p>MSG: {state.msg}</p>
        </form>
    )
}