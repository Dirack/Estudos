import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const Footer = ()=>{
    const userCtx = useContext(UserContext)

    return (
        <div>
            Total de usuários: {userCtx?.users.length}
        </div>
    )
}

export default Footer