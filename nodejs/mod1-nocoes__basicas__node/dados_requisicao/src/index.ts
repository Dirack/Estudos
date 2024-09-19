import express, {Request, Response, urlencoded} from 'express'

const server = express()

server.use(urlencoded({extended: true}))

server.use("/:var",(req: Request, res: Response)=>{
    console.log("Params:", req.params)
    console.log("Query: ", req.query)
    console.log("Body:", req.body)
    res.send("Oi")
})

server.listen(3000)