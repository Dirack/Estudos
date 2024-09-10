import {createServer} from 'node:http'

const server = createServer((req,res)=>{
	res.end("Ola mundo")
})

server.listen(3000, ()=>{
	console.log("Server working")
})
