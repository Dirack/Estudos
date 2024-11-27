"use client"
import { useAppSelector } from "./redux/useAppSelector"

const Content = ()=>{

    const user = useAppSelector(state => state.user)

    return (
        <div>
            <p>Meu nome é: {user.name} e tenho {user.age} anos.</p>
            <p>Tema: ...</p>
            <hr></hr>
            <input type="text" value={user.name} />

            <hr></hr>
            <button>Switch Theme</button>
        </div>
    )
}

export default Content