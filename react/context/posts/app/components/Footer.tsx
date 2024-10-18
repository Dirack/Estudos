import { useContext } from "react"
import { PostContext } from "../contexts/PostContext"

const Footer = ()=>{

    const postsCtx = useContext(PostContext)

    return (
        <footer>
            Total de posts: {postsCtx?.posts.length}
        </footer>
    )
}

export default Footer