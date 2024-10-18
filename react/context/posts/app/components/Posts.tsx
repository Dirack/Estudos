import { useContext } from "react"
import { PostContext } from "../contexts/PostContext"

const Posts = ()=>{

    const postsCtx = useContext(PostContext)

    return (
        <div>
            {postsCtx?.posts &&
            
            postsCtx?.posts.map((post,index)=>{
                return (
                    <div key={post.id} className="border border-gray-400 m-2 p-2">
                        <div className="font-bold text-xl">{post.title}</div>
                        <div>{post.body}</div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Posts