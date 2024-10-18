import { useContext, useState } from "react"
import { PostContext } from "../contexts/PostContext"

const Header = ()=>{

    const postsCtx = useContext(PostContext)

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const handleAddPost = ()=>{
        if(title && body){
            postsCtx?.addPost(title,body)
            setTitle('')
            setBody('')
        }
    }

    return (
        <div>
            <div className="text-2xl font-bold mt-4">
                Título da Página
            </div>
            <div className="border border-gray-400 rounded-md flex flex-col gap-2 p-4 mt-4">
                <input type="text" placeholder="Digite algo..." className="rounded-md p-2 text-xl text-black"
                value={title} onChange={e => setTitle(e.target.value)} />
                <textarea placeholder="Digite algo..." className="rounded-md p-2 text-xl text-black"
                value={body} onChange={e => setBody(e.target.value)} />
                <button className="bg-yellow-500 text-white font-bold p-2 rounded-md"
                onClick={handleAddPost}>Add</button>
            </div>
        </div>
    )
}

export default Header