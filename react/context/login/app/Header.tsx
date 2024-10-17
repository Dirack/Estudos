import { useContext } from "react"
import { UserContext } from "./UserContext"

const Header = ()=>{

    const loggedCtx = useContext(UserContext)
    const HandleLogout = ()=>{
        loggedCtx?.setName('')
    }

    return (
        <header>
            {loggedCtx?.name &&
            <>
                <p>Usuário: {loggedCtx?.name}</p>
                <button onClick={HandleLogout} className="bg-yellow-500 font-bold p-2 mt-2 rounded-md">Sair</button>
            </>
            }
            {!loggedCtx || loggedCtx?.name === '' &&
            <p>Você NÃO ESTÁ LOGADO!</p>
            }
        </header>
    )
}

export default Header