export async function GET(request: Request){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return Response.json({posts})
}