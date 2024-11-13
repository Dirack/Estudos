import { Metadata } from "next";

type Props = {
    params: {
        postid : string;
    }
}

type Post = {
    id: string;
    userId: string;
    title: string;
    body: string;
}

// export const metadata: Metadata = {
//     title: 'Blog'
//   }

export const generateMetadata = async ({params}: Props): Promise<Metadata | undefined>=>{
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const post: Post = await postRequest.json()

    if(post.id)
        return {
            title: post.title
        }
}

const Page = async ({params}: Props)=>{
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const post: Post = await postRequest.json()

    if(!post.id) return (<div>Post não encontrado!</div>)

    return (
        <div className="text-center">
            <div>ID: {post.id} User ID: {post.userId}</div>
            <h1>Title: {post.title}</h1>
            <p>Body: {post.body}</p>
        </div>
    )
}

export default Page