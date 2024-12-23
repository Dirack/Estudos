"use client"
import { useDispatch } from "react-redux"
import { useAppSelector } from "./redux/useAppSelector"
import { ChangeEvent } from "react"
import { setAge, setName } from "./redux/userReducer"
import { setThemeStatus } from "./redux/themeReducer"

const Content = ()=>{

    const dispatch = useDispatch()
    const user = useAppSelector(state => state.user)
    const theme = useAppSelector(state => state.theme)

    const handleNameInput = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch(setName(e.target.value))
    }

    const handleAgeInput = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch(setAge(parseInt(e.target.value)))
    }

    const handleSwitchTheme = ()=>{
        dispatch(setThemeStatus(theme.status === 'light'? 'dark':'light'))
    }

    return (
        <div>
            <p>Meu nome é: {user.name} e tenho {user.age} anos.</p>
            <p>Tema: {theme.status}</p>
            <hr></hr>
            <input type="text" value={user.name} onChange={handleNameInput} />
            <input type="number" value={user.age} onChange={handleAgeInput} />

            <hr></hr>
            <button onClick={handleSwitchTheme}>Switch Theme</button>
        </div>
    )
}

export default Content