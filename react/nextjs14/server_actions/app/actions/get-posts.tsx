"use server"

export const getPosts = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return posts
}