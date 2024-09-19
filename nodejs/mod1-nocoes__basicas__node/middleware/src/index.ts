import express, {Request, RequestHandler, Response} from 'express'

const server = express()

const interferir: RequestHandler = (req, res, next)=>{
    let permitir = req.params.permitir
    console.log(req.params)

    if(permitir === 'yes'){
        next()
    }
    res.status(403).json({erro:"Not allowed"})
}

server.use("/:permitir", interferir)

server.use("/:permitir", (req: Request, res: Response)=>{
    res.status(200).json({msg:"Olá mundo!"})
})

server.listen(3000)