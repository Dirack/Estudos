import { ReactNode, createContext, useState } from "react";
import { Post } from "../types/Post";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string)=>void;
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({children}:{children: ReactNode})=>{
    const [posts,setPosts] = useState<Post[]>([
        {id: 1, title: 'Post bonito', body: 'meu post'},
        {id: 2, title: 'Post inútil', body: 'meu post'},
        {id: 3, title: 'Estou perdendo tempo', body: 'meu post'},
    ])

    const addPost = (title: string, body: string)=>{
        setPosts([...posts, {id: posts.length, title, body}])
    }

    return (
        <PostContext.Provider value={{posts, addPost}}>{children}</PostContext.Provider>
    )
}